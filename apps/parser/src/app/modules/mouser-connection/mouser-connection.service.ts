import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';

import { AppAccountTableService } from '../db-data-handler/tables/app-account/app-account-table.service';
import {
  MouserAccountApiCallTableService
} from '../db-data-handler/tables/mouser-account-api-call/mouser-account-api-call-table.service';
import { ResponseDto } from '../../abstract/response.dto';
import { ResponseError } from '../../abstract/response.error';

// TODO: check is singleton?
// TODO: controller ?
@Injectable()
export class MouserConnectionService {
  public readonly apiV1Url = this.configService.get<string>('MOUSER_API_V1_URL');
  public readonly apiV2Url = this.configService.get<string>('MOUSER_API_V2_URL');
  public readonly apiKey = this.configService.get<string>('MOUSER_API_KEY');

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly appAccountTableService: AppAccountTableService,
    private readonly mouserAccountApiCallTableService: MouserAccountApiCallTableService,
  ) {}

  get<T>(endpoint: string, accountId: number): Observable<AxiosResponse<T> | ResponseError> {
    return this.appAccountTableService.getApiV2KeyByAccountId(accountId).pipe(
      // switchMap(apiKeyResponse =>
      //   apiKeyResponse.status === HttpStatus.OK
      //     ? this.httpService.get<T>(this.getUrl(endpoint, apiKeyResponse.data ?? ''))
      //     : of(apiKeyResponse),
      // ),
      this.checkDbStatusAndCallMouser<T, string | null, undefined>(endpoint, this.httpService.get<T>),
      this.checkMouserStatusAndWriteCallToDb<T>(accountId),
    );
  }

  post<T, Body>(endpoint: string, accountId: number, body: Body): Observable<AxiosResponse<T> | ResponseError> {
    return this.appAccountTableService.getApiV2KeyByAccountId(accountId).pipe(
      // switchMap(apiKeyResponse =>
      //   apiKeyResponse.status === HttpStatus.OK
      //     ? this.httpService.post<T>(this.getUrl(endpoint, apiKeyResponse.data ?? ''))
      //     : of(apiKeyResponse),
      // ),
      this.checkDbStatusAndCallMouser<T, string | null, Body>(endpoint, this.httpService.post<T>, body),
      this.checkMouserStatusAndWriteCallToDb<T>(accountId),
    );
  }

  // private checkDbStatusAndCallMouser<T>(
  //   cb: (endpoint: string, apiKey: string) => Observable<AxiosResponse<T>>,
  // ): (source$: Observable<ResponseDto>) => Observable<AxiosResponse<T> | ResponseDto> {
  //   return source$ =>
  //     source$.pipe(
  //       switchMap(apiKeyResponse =>
  //         apiKeyResponse.status === HttpStatus.OK ? cb(endpoint, apiKey) : of(apiKeyResponse),
  //       ),
  //     );
  // }

  private checkDbStatusAndCallMouser<T, R extends string | null, Body>(
    endpoint: string,
    cb: (url: string, body?: Body) => Observable<AxiosResponse<T> | ResponseDto<R>>,
    body?: Body,
  ): (source$: Observable<ResponseDto<R>>) => Observable<AxiosResponse<T> | ResponseDto<R>> {
    return source$ =>
      source$.pipe(
        switchMap(apiKeyResponse =>
          apiKeyResponse?.status === HttpStatus.OK
            ? cb(this.getUrl(endpoint, apiKeyResponse?.data ?? ''), body)
            : of(apiKeyResponse),
        ),
      );
  }

  private checkMouserStatusAndWriteCallToDb<T>(
    accountId: number,
  ): (source$: Observable<AxiosResponse<T> | ResponseDto>) => Observable<AxiosResponse<T> | ResponseError> {
    return source$ =>
      source$.pipe(
        switchMap(mouserResponseOrResponseDto => {
          if (mouserResponseOrResponseDto instanceof ResponseDto)
            return of(new ResponseError(mouserResponseOrResponseDto.message ?? '', mouserResponseOrResponseDto.status));

          const mouserResponse = mouserResponseOrResponseDto;
          if (mouserResponse.status !== HttpStatus.OK) return of(mouserResponse);

          return combineLatest([
            of(mouserResponse),
            this.mouserAccountApiCallTableService.writeCall(accountId).pipe(map(dbResponse => dbResponse.call_time)),
          ]);
        }),
        map(responseOrResponseError => {
          return Array.isArray(responseOrResponseError) ? responseOrResponseError[0] : responseOrResponseError;
        }),
      );
  }

  private getUrl(endpoint: string, apiKey: string): string {
    return `${this.apiV2Url}/${endpoint}?apiKey=${apiKey}`;
  }
}
