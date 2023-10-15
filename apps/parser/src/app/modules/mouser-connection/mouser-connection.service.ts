import { HttpException, HttpStatus, Injectable, RequestMethod } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';

import {
  AppAccountTableService
} from '../db-data-handler/tables/application-configuration-tables/app-account/app-account-table.service';
import {
  MouserAccountApiCallTableService
} from '../db-data-handler/tables/application-configuration-tables/mouser-account-api-call/mouser-account-api-call-table.service';
import { ResponseDto } from '../../abstract/response.dto';
import { MouserApiVersion } from '../../models/api-versions.enum';

// TODO: check is singleton?
@Injectable()
export class MouserConnectionService {
  public readonly apiV1Url = this.configService.get<string>('MOUSER_API_V1_URL');
  public readonly apiV2Url = this.configService.get<string>('MOUSER_API_V2_URL');

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly appAccountTableService: AppAccountTableService,
    private readonly mouserAccountApiCallTableService: MouserAccountApiCallTableService,
  ) {}

  get<T>(endpoint: string, accountId: number): Observable<AxiosResponse<T>> {
    return this.appAccountTableService
      .getApiV2KeyByAccountId(accountId)
      .pipe(
        this.checkDbStatusAndCallMouser<T, string | undefined, undefined>(endpoint, RequestMethod.GET),
        this.checkMouserStatusAndWriteCallToDb<T>(accountId),
      );
  }

  post<T, Body>(endpoint: string, accountId: number, body: Body): Observable<AxiosResponse<T>> {
    return this.appAccountTableService
      .getApiV2KeyByAccountId(accountId)
      .pipe(
        this.checkDbStatusAndCallMouser<T, string | undefined, Body>(endpoint, RequestMethod.POST, body),
        this.checkMouserStatusAndWriteCallToDb<T>(accountId),
      );
  }

  private checkDbStatusAndCallMouser<T, R extends string | undefined, Body>(
    endpoint: string,
    method: RequestMethod,
    body?: Body,
  ): (source$: Observable<ResponseDto<R>>) => Observable<AxiosResponse<T>> {
    return source$ =>
      source$.pipe(
        switchMap(apiKeyResponse => {
          if (apiKeyResponse?.status !== HttpStatus.OK)
            throw new HttpException(apiKeyResponse.message ?? '', apiKeyResponse.status);

          const url = this.getUrl(endpoint, apiKeyResponse?.data ?? '');
          return this.checkMethodAndCallHttp<T, Body>(method, url, body)
        }),
      );
  }

  private checkMouserStatusAndWriteCallToDb<T>(
    accountId: number,
  ): (source$: Observable<AxiosResponse<T>>) => Observable<AxiosResponse<T>> {
    return source$ =>
      source$.pipe(
        switchMap(mouserResponse => {
          if (mouserResponse.status !== HttpStatus.OK)
            // TODO: разобраться и расшифровать ее
            throw new HttpException('Ошибка на стороне Mouser', mouserResponse.status);

          return combineLatest([
            of(mouserResponse),
            this.mouserAccountApiCallTableService.writeCall(accountId).pipe(map(dbResponse => dbResponse.call_time)),
          ]);
        }),
        map(mouserResponseAndDbResponse => {
          return mouserResponseAndDbResponse[0];
        }),
      );
  }

  private checkMethodAndCallHttp<T, Body>(method: RequestMethod, url: string, body?: Body): Observable<AxiosResponse<T>> {
    switch(method) {
      case RequestMethod.GET:
        return this.httpService.get<T>(url)
      case RequestMethod.POST:
        return this.httpService.post<T>(url, body)
      default:
        return this.httpService.get<T>(url)
    }
  }

  private getUrl(endpoint: string, apiKey: string, apiVersion?: MouserApiVersion): string {
    return `${this.getApiVersionUrl(apiVersion)}/${endpoint}?apiKey=${apiKey}`;
  }

  // TODO: DI
  private getApiVersionUrl(apiVersion = MouserApiVersion.ApiV2): string {
    if (apiVersion === MouserApiVersion.ApiV1 && !this.apiV1Url)
      throw new HttpException('Не найден ApiV1Url', HttpStatus.NOT_FOUND);
    if (apiVersion === MouserApiVersion.ApiV2 && !this.apiV2Url)
      throw new HttpException('Не найден ApiV2Url', HttpStatus.NOT_FOUND);

    return apiVersion === MouserApiVersion.ApiV2 ? `${this.apiV2Url}` : `${this.apiV1Url}`;
  }
}
