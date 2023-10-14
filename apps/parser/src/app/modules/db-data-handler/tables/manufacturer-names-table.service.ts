import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';

import { ManufacturerNames, type Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ManufacturerNamesTableService {
  constructor(private readonly prismaService: PrismaService) {}

  // TODO: return value
  create(manufacture: Prisma.ManufacturerNamesCreateInput) {
    return this.prismaService.manufacturerNames.create({ data: manufacture });
  }

  createMany(manufactures: Prisma.ManufacturerNamesCreateInput[]) {
    return this.prismaService.manufacturerNames.createMany({ data: manufactures })
  }

  getAll(): Observable<ManufacturerNames[]> {
    return from(this.prismaService.manufacturerNames.findMany());
  }

  // getBy(): any {}

  // update(): any {}

  // delete(): any {}

  getManufacturesCount(): Observable<number> {
    return from(this.prismaService.manufacturerNames.count());
  }

  truncateTable(): Observable<Prisma.BatchPayload> {
    // TODO: truncate
    return from(this.prismaService.manufacturerNames.deleteMany({ where: {}}))
  }
}
