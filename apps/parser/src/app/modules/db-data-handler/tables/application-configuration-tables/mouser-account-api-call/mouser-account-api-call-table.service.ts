import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../../../prisma/prisma.service';
import { catchAndThrowException, getNowDateISO } from '../../../../../utils';

@Injectable()
export class MouserAccountApiCallTableService {
  constructor(private readonly prismaService: PrismaService) {}

  writeCall(accountId: number): Observable<Prisma.MouserAccountApiCallUncheckedCreateInput> {
    return from(this.prismaService.mouserAccountApiCall.create({
      data: { call_time: getNowDateISO(), appAccountAccount_id: accountId },
    })).pipe(catchAndThrowException());
  }
}
