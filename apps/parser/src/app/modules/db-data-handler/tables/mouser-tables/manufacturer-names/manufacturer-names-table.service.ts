import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';

import { ManufacturerNames, type Prisma } from '@prisma/client';
import { PrismaService } from '../../../../prisma/prisma.service';
import { catchAndThrowException } from '../../../../../utils';

@Injectable()
export class ManufacturerNamesTableService {
  constructor(private readonly prismaService: PrismaService) {}

  // TODO: return value
  create(manufacture: Prisma.ManufacturerNamesCreateInput) {
    return from(this.prismaService.manufacturerNames.create({ data: manufacture })).pipe(catchAndThrowException())
  }

  createMany(manufactures: Prisma.ManufacturerNamesCreateInput[]) {
    return from(this.prismaService.manufacturerNames.createMany({ data: manufactures })).pipe(catchAndThrowException())
  }

  getAll(): Observable<ManufacturerNames[]> {
    return from(this.prismaService.manufacturerNames.findMany()).pipe(catchAndThrowException())
  }

  // getBy(): any {}

  // update(): any {}

  // delete(): any {}

  getManufacturesCount(): Observable<number> {
    return from(this.prismaService.manufacturerNames.count()).pipe(catchAndThrowException());
  }

  truncateTable(): Observable<Prisma.BatchPayload> {
    // TODO: truncate
    return from(this.prismaService.manufacturerNames.deleteMany({ where: {}})).pipe(catchAndThrowException())
  }
}
