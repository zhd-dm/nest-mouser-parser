import { Controller, Post } from '@nestjs/common';
import { combineLatest, forkJoin, of, switchMap, tap } from 'rxjs';

import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { Prisma } from '@prisma/client';
import { RequiredMouserManufacturerName } from './manufacturer-names-endpoint.types';
import {
  ManufacturerNamesTableService
} from '../../../modules/db-data-handler/tables/mouser-tables/manufacturer-names/manufacturer-names-table.service';
import {
  ManufacturerListApiService
} from '../../../modules/mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list-api.service';

@Controller('manufacturer-names')
export class ManufacturerNamesEndpointController {
  constructor(
    private readonly manufacturerNamesTableService: ManufacturerNamesTableService,
    private readonly manufacturerListApiService: ManufacturerListApiService,
  ) {}

  // TODO: Responses !!!
  // TODO: status codes
  @Post()
  updateManufacturerNames() {
    return forkJoin([
      this.manufacturerListApiService.getManufactures(),
      this.manufacturerNamesTableService.getManufacturesCount(),
    ]).pipe(
      switchMap(([mouserManufactures, dbManufacturesCount]) => {
        if (!this.isManufacturesAndCountNotEquals(mouserManufactures, dbManufacturesCount))
          return of('Нечего обновлять. Количество мануфактур равно.');

        const mouserManufactureNames = (mouserManufactures?.MouserManufacturerList?.ManufacturerList ??
          []) as RequiredMouserManufacturerName[];
        if (dbManufacturesCount === 0) return this.writeManufactureNamesToDb(mouserManufactureNames);

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
