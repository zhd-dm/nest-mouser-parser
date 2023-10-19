import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../../../../core/prisma/prisma.service';
import { catchAndThrowException, getNowDateISO } from '../../../../../core/utils';

@Injectable()
export class MouserAccountApiCallTableService {
  constructor(private readonly prismaService: PrismaService) {}

  writeCall(accountId: number): Observable<Prisma.MouserAccountApiCallUncheckedCreateInput> {
    return from(this.prismaService.mouserAccountApiCall.create({
      data: { call_time: getNowDateISO(), appAccountAccount_id: accountId },
    })).pipe(catchAndThrowException());
  }

  /**
   * Возвращает формат даты `2023-10-15T18:12:22.424Z`
   */
  // TODO: response type
  getAll() {
    return from(this.prismaService.mouserAccountApiCall.findMany({ where: {} })).pipe(catchAndThrowException())
  }
}
