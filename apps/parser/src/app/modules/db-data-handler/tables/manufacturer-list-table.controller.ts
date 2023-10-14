import { Controller, Post } from '@nestjs/common';
import { combineLatest, forkJoin, of, switchMap } from 'rxjs';

import { ManufacturerListTableService } from './manufacturer-list-table.service';
import { ManufacturerListApiService } from '../../mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list-api.service';
import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { Prisma } from '@prisma/client';
import { RequiredMouserManufacturerName } from './manufacturer-list-table.types';

@Controller('admin/manufacturerlist-table')
export class ManufacturerListTableController {
  constructor(
    private readonly manufacturerListTableService: ManufacturerListTableService,
    private readonly manufacturerListApiService: ManufacturerListApiService,
  ) {}

  // TODO: Responses !!!
  @Post()
  updateManufactureTable() {
    return forkJoin([
      this.manufacturerListApiService.getManufactures(),
      this.manufacturerListTableService.getManufacturesCount(),
    ]).pipe(
      switchMap(([mouserManufactures, dbManufacturesCount]) => {
        if (!this.isManufacturesAndCountNotEquals(mouserManufactures, dbManufacturesCount))
          return of('Нечего обновлять. Количество мануфактур равно.');

        const mouserManufactureNames = mouserManufactures?.MouserManufacturerList?.ManufacturerList ?? [];
        return combineLatest([
          this.manufacturerListTableService.truncateTable(),
          this.writeManufactureNamesToDb(mouserManufactureNames as RequiredMouserManufacturerName[]),
        ]);
      }),
    );
  }

  private isManufacturesAndCountNotEquals(
    mouserManufactures: MouserManufacturersNameRoot,
    dbManufacturesCount: number,
  ): boolean {
    return !(
      !!mouserManufactures.MouserManufacturerList &&
      mouserManufactures.MouserManufacturerList?.Count === dbManufacturesCount
    );
  }

  private writeManufactureNamesToDb(mouserManufactureNames: RequiredMouserManufacturerName[]) {
    // TODO: класс для ошибок
    // TODO: обработка ошибки БД

    const manufacturesForDb = this.getManufacturesForDb(mouserManufactureNames);
    return this.manufacturerListTableService.createMany(manufacturesForDb);
  }

  private getManufacturesForDb(
    mouserManufactureNames: RequiredMouserManufacturerName[],
  ): Prisma.ManufacturerListCreateInput[] {
    return mouserManufactureNames?.map(({ ManufacturerName }) => ({
      manufacturer_name: ManufacturerName,
      last_updated: this.getDateNow(),
    }));
  }

  // TODO: вынести в отдельную util либу
  // TODO: дата со временем
  private getDateNow(): Date {
    return new Date();
  }
}
