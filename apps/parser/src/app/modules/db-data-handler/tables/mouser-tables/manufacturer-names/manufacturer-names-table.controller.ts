import { Controller, Post } from '@nestjs/common';
import { catchError, combineLatest, forkJoin, of, switchMap } from 'rxjs';

import { ManufacturerNamesTableService } from './manufacturer-names-table.service';
import { ManufacturerListApiService } from '../../../../mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list-api.service';
import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { Prisma } from '@prisma/client';
import { RequiredMouserManufacturerName } from './manufacturer-names-table.types';

@Controller('admin/manufacturernames-table')
export class ManufacturerNamesTableController {
  constructor(
    private readonly manufacturerNamesTableService: ManufacturerNamesTableService,
    private readonly manufacturerListApiService: ManufacturerListApiService,
  ) {}

  // TODO: Responses !!!
  @Post()
  updateManufactureNamesTable() {
    return forkJoin([
      this.manufacturerListApiService.getManufactures(),
      this.manufacturerNamesTableService.getManufacturesCount(),
    ]).pipe(
      switchMap(([mouserManufactures, dbManufacturesCount]) => {
        if (!this.isManufacturesAndCountNotEquals(mouserManufactures, dbManufacturesCount))
          return of('Нечего обновлять. Количество мануфактур равно.');
        console.log(mouserManufactures, dbManufacturesCount)
        const mouserManufactureNames = (mouserManufactures?.MouserManufacturerList?.ManufacturerList ?? []) as RequiredMouserManufacturerName[];
        if (dbManufacturesCount === 0) return this.writeManufactureNamesToDb(mouserManufactureNames)

        return combineLatest([
          this.manufacturerNamesTableService.truncateTable(),
          this.writeManufactureNamesToDb(mouserManufactureNames),
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
    return this.manufacturerNamesTableService.createMany(manufacturesForDb);
  }

  private getManufacturesForDb(
    mouserManufactureNames: RequiredMouserManufacturerName[],
  ): Prisma.ManufacturerNamesCreateInput[] {
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
