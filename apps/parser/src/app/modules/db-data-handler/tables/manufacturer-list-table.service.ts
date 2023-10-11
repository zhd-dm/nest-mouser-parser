import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';

import { ManufacturerList, type Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ManufacturerListTableService {
  constructor(private readonly prismaService: PrismaService) {}

  // TODO: return value
  create(manufacture: Prisma.ManufacturerListCreateInput) {
    return this.prismaService.manufacturerList.create({ data: manufacture });
  }

  createMany(manufactures: Prisma.ManufacturerListCreateInput[]) {
    return this.prismaService.manufacturerList.createMany({ data: manufactures })
  }

  getAll(): Observable<ManufacturerList[]> {
    return from(this.prismaService.manufacturerList.findMany());
  }

  // getBy(): any {}

  // update(): any {}

  // delete(): any {}

  private async getManufacturesCount(): Promise<number> {
    return this.prismaService.manufacturerList.count();
  }
}
