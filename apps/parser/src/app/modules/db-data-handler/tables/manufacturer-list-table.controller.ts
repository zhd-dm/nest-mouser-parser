import { Controller, Post } from '@nestjs/common';
import { catchError, forkJoin, map } from 'rxjs';

import { ManufacturerListTableService } from './manufacturer-list-table.service';
import {
  ManufacturerListApiService
} from '../../mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list-api.service';
import { MouserManufacturerName, MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { ManufacturerList, Prisma } from '@prisma/client';
import { MouserAndDbTableManufacturesObject } from './manufacturer-list-table.types';

@Controller('admin/manufacturerlist-table')
export class ManufacturerListTableController {
  constructor(
    private readonly manufacturerListTableService: ManufacturerListTableService,
    private readonly manufacturerListApiService: ManufacturerListApiService,
  ) {}


  // TODO: Responses !!!
  @Post()
  updateManufactureTable() {
    // TODO: проверять не по количеству в базе, а каждую запись сравнивать с ответом от mouser

    return forkJoin([
      this.manufacturerListApiService.getManufactures(),
      this.manufacturerListTableService.getAll()
    ]).pipe(
      map(([mouserManufactures, dbTableManufactures]) => this.checkAndGetManufacturesObject(mouserManufactures, dbTableManufactures)),
      map(mouserAndDbTableManufactures => this.writeManufacturesToDb(mouserAndDbTableManufactures)),
      catchError(err => err)
    )
  }

  private checkAndGetManufacturesObject(
    mouserManufactures: MouserManufacturersNameRoot,
    dbTableManufactures: ManufacturerList[]
  ): MouserAndDbTableManufacturesObject | null {
    return this.isEqualManufacturesLength(mouserManufactures, dbTableManufactures)
      ? null
      : {
        mouserManufactures: mouserManufactures.MouserManufacturerList?.ManufacturerList ?? null,
        dbTableManufactures: dbTableManufactures ?? null
      }
  }

  private isEqualManufacturesLength(mouserManufactures: MouserManufacturersNameRoot, dbTableManufactures: ManufacturerList[]): boolean {
    return mouserManufactures.MouserManufacturerList?.Count === dbTableManufactures.length
  }

  private writeManufacturesToDb(mouserAndDbTableManufactures: MouserAndDbTableManufacturesObject | null) {
    // TODO: класс для ошибок
    // TODO: обработка ошибки БД
    if (!mouserAndDbTableManufactures) return 'Количество записей в БД совпадает с количеством записей в Mouser'

    const { mouserManufactures } = mouserAndDbTableManufactures
    const manufacturesForDb = this.getManufacturesForDb(mouserManufactures ?? [])
    return this.manufacturerListTableService.createMany(manufacturesForDb)
  }

  private getManufacturesForDb(mouserManufactures: MouserManufacturerName[]): Prisma.ManufacturerListCreateInput[] {
    return mouserManufactures?.map(({ ManufacturerName }) => ({ manufacturer_name: ManufacturerName ?? '', last_updated: this.getDateNow() }))
  }

  // TODO: вынести в отдельную util либу
  // TODO: дата со временем
  private getDateNow(): Date {
    return new Date()
  }
}
