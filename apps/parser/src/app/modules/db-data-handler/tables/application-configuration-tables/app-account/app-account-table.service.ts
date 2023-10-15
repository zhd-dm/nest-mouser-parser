import { HttpStatus, Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../../../prisma/prisma.service';
import { ResponseDto } from '../../../../../abstract/response.dto';

@Injectable()
export class AppAccountTableService {
  constructor(private readonly prismaService: PrismaService) {}

  getAccountIds(): Observable<ResponseDto<number[] | undefined>> {
    return from(this.prismaService.appAccount.findMany()).pipe(
      map(dbResponse => dbResponse.map(account => account.account_id)),
      map(accountIds => ResponseDto.generateResponse(HttpStatus.OK, 'Найденные аккаунты:', accountIds)),
    );
  }

  getApiV2KeyByAccountId(accountId: number): Observable<ResponseDto<string | undefined>> {
    return from(this.prismaService.appAccount.findFirst({ where: { account_id: accountId } })).pipe(
      map(dbResponse => dbResponse?.account_second_api_key),
      map(accountApiKey => this.getApiKeyResponse(accountApiKey)),
    );
  }

  createAccount(account: Prisma.AppAccountCreateInput): Observable<number> {
    return from(this.prismaService.appAccount.create({ data: account })).pipe(map(dbResponse => dbResponse.account_id))
  }

  private getApiKeyResponse(accountApiKey: string | undefined): ResponseDto<string | undefined> {
    return accountApiKey
      ? ResponseDto.generateResponse(HttpStatus.OK, 'Найденный ApiKey:', accountApiKey)
      : ResponseDto.generateResponse(HttpStatus.NOT_FOUND, 'Аккаунт не найден', undefined);
  }
}
