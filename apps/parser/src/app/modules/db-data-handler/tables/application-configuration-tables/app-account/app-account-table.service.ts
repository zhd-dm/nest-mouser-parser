import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { catchError, from, map, Observable, tap } from 'rxjs';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../../../prisma/prisma.service';
import { ResponseDto } from '../../../../../abstract/response.dto';
import { getStartTodayDateISO, getEndTodayDateISO } from '../../../../../utils/dates-transformer';

@Injectable()
export class AppAccountTableService {
  constructor(private readonly prismaService: PrismaService) {}

  getAccountIds(): Observable<ResponseDto<number[] | undefined>> {
    return from(this.prismaService.appAccount.findMany()).pipe(
      map(dbResponse => dbResponse.map(account => account.account_id)),
      map(accountIds => ResponseDto.generateResponse(HttpStatus.OK, 'Найденные аккаунты:', accountIds)),
    );
  }

  // TODO: получить accountId с которого можно сделать запрос
  // getAvailableAccountId() {
  //   return from(
  //     // this.prismaService.appAccount.findFirst({
  //     //   select: { account_id: true },
  //     //   where: {
  //     //     MouserAccountApiCall: {  call_time: { gt: getPureTodayDayDateISO(), lt: getPureNextDayDateISO() } },
  //     //   },
  //     // }),
  //     // .findFirst({ include: { MouserAccountApiCall: { select: { call_time: true } } } })
  //     // .findFirst({ select: { account_id: true } })
  //     // .MouserAccountApiCall({ select: { call_time: true } }),
  //   ).pipe(tap(console.log));
  // }

  // TODO: вроде работает правильно
  getHowManyCallsAccountMakeToday(accountId: number): Observable<number> {
    return from(
      this.prismaService.mouserAccountApiCall.count({
        where: {
          appAccountAccount_id: accountId,
          AND: { call_time: { gt: getStartTodayDateISO(), lt: getEndTodayDateISO() } },
        },
      }),
    )
  }

  getApiV2KeyByAccountId(accountId: number): Observable<ResponseDto<string | undefined>> {
    return from(
      this.prismaService.appAccount.findFirst({
        where: { account_id: accountId },
        select: { account_second_api_key: true },
      }),
    ).pipe(
      map(dbResponse => dbResponse?.account_second_api_key),
      map(accountApiKey => this.getApiKeyResponse(accountApiKey)),
    );
  }

  createAccount(account: Prisma.AppAccountCreateInput): Observable<ResponseDto<number>> {
    return from(this.prismaService.appAccount.create({ data: account })).pipe(
      map(dbResponse => dbResponse.account_id),
      map(accountId => ResponseDto.generateResponse(HttpStatus.OK, `Id созданного аккаунта: ${accountId}`, accountId)),
      catchError(dbResponse => {
        throw new HttpException(dbResponse.name, HttpStatus.BAD_REQUEST);
      }),
    );
  }

  private getApiKeyResponse(accountApiKey: string | undefined): ResponseDto<string | undefined> {
    return accountApiKey
      ? ResponseDto.generateResponse(HttpStatus.OK, 'Найденный ApiKey:', accountApiKey)
      : ResponseDto.generateResponse(HttpStatus.NOT_FOUND, 'Аккаунт не найден', undefined);
  }
}
