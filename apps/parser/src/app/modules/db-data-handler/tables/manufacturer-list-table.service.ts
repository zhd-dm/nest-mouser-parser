import { Injectable } from '@nestjs/common';

import { CrudModel } from '../../../abstract/crud.model';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ManufacturerListTableService implements CrudModel {

  constructor(private readonly prismaService: PrismaService) {}

  create(): any {}
  getAll(): any {}
  getBy(): any {}
  update(): any {}
  delete(): any {}

  private async getManufacturesCount(): Promise<number> {
    return this.prismaService.manufacturerList.count();
  }
}
