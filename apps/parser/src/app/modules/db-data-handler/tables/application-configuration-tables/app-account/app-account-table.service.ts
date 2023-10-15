import { HttpStatus, Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';

import { PrismaService } from '../../../../prisma/prisma.service';
import { ResponseDto } from '../../../../../abstract/response.dto';

@Injectable()
export class AppAccountTableService {
  constructor(private readonly prismaService: PrismaService) {}

  getAccountIds(): Observable<ResponseDto<number[] | null>> {
    return from(this.prismaService.appAccount.findMany()).pipe(
      map(dbResponse => dbResponse.map(account => account.account_id)),
      map(accountIds => ResponseDto.generateResponse(HttpStatus.OK, accountIds)),
    );
  }

  getApiV2KeyByAccountId(accountId: number): Observable<ResponseDto<string | null>> {
    return from(this.prismaService.appAccount.findFirst({ where: { account_id: accountId } })).pipe(
      map(dbResponse => dbResponse?.account_second_api_key),
      map(accountApiKey => this.getApiKeyResponse(accountApiKey)),
    );
  }

  private getApiKeyResponse(accountApiKey: string | undefined): ResponseDto<string | null> {
    return accountApiKey
      ? ResponseDto.generateResponse(HttpStatus.OK, accountApiKey)
      : ResponseDto.generateResponse(HttpStatus.NOT_FOUND, null, 'Аккаунт не найден');
  }
}
