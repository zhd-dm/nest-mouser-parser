import { HttpStatus, Injectable } from '@nestjs/common';
import { from, map, Observable, tap } from 'rxjs';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../../../prisma/prisma.service';
import { ResponseDto } from '../../../../../abstract/response.dto';
import { catchAndThrowException, getEndTodayDateISO, getStartTodayDateISO } from '../../../../../utils';
import {
  CreateAccountReturn,
  GetAccountIdsReturn,
  GetApiV2KeyByAccountIdReturn,
  GetHowManyCallsAccountMakeTodayReturn
} from './app-account-table.return-types';

@Injectable()
export class AppAccountTableService {
  constructor(private readonly prismaService: PrismaService) {}

  // TODO: return type
  getAccountIds(): Observable<GetAccountIdsReturn> {
    return from(
      this.prismaService.appAccount.findMany({
        select: { account_id: true },
      }),
    ).pipe(
      map(dbResponse => ResponseDto.generateResponse(HttpStatus.OK, 'Найденные аккаунты:', dbResponse)),
      catchAndThrowException(),
    );
  }

  // TODO: получить accountId с которого можно сделать запрос
  getAvailableAccountId() {
    return from(
      // this.prismaService.appAccount.findMany({
      //   where: {
      //     MouserAccountApiCall: {
      //       some: {
      //         AND: [
      //           { call_time: { gt: getStartTodayDateISO(), lt: getEndTodayDateISO() } },
      //           { MouserAccountApiCall: {} }
      //           // { call_time: { lt: getEndTodayDateISO() } }
      //         ]
      //       }
      //     },
      //     // _count: {
      //     //   MouserAccountApiCall: { lt: 1000 }
      //     // }
      //   },
      //   select: {
      //     account_id: true
      //   }
      // })
      this.prismaService.appAccount.findMany({
        where: {
          MouserAccountApiCall: {
            some: {
              call_time: { gt: getStartTodayDateISO(), lt: getEndTodayDateISO() },
            },
          },
        },
        select: { account_id: true },
      }),
    ).pipe(tap(console.log), catchAndThrowException());
  }

  // TODO: вроде работает правильно
  // TODO: возвращает 0, а не undefined если нет такого аккаунта в БД
  getHowManyCallsAccountMakeToday(accountId: number): Observable<GetHowManyCallsAccountMakeTodayReturn> {
    return from(
      this.prismaService.mouserAccountApiCall.count({
        where: {
          appAccountAccount_id: accountId,
          AND: { call_time: { gt: getStartTodayDateISO(), lt: getEndTodayDateISO() } },
        },
      }),
    ).pipe(
      map(dbResponse =>
        ResponseDto.generateResponse(HttpStatus.OK, 'Количество запросов к Mouser сегодня:', dbResponse),
      ),
      catchAndThrowException(),
    );
  }

  getApiV2KeyByAccountId(accountId: number): Observable<GetApiV2KeyByAccountIdReturn> {
    return from(
      this.prismaService.appAccount.findFirst({
        where: { account_id: accountId },
        select: { account_second_api_key: true },
      }),
    ).pipe(
      map(dbResponse => dbResponse?.account_second_api_key),
      map(accountApiKey => this.getApiKeyResponse(accountApiKey)),
      catchAndThrowException(),
    );
  }

  createAccount(account: Prisma.AppAccountCreateInput): Observable<CreateAccountReturn> {
    return from(this.prismaService.appAccount.create({ data: account })).pipe(
      map(dbResponse => dbResponse.account_id),
      map(accountId => ResponseDto.generateResponse(HttpStatus.OK, `Id созданного аккаунта:`, accountId)),
      catchAndThrowException(),
    );
  }

  private getApiKeyResponse(accountApiKey: string | undefined): ResponseDto<string | undefined> {
    return accountApiKey
      ? ResponseDto.generateResponse(HttpStatus.OK, 'Найденный ApiKey:', accountApiKey)
      : ResponseDto.generateResponse(HttpStatus.NOT_FOUND, 'Аккаунт не найден', undefined);
  }
}
