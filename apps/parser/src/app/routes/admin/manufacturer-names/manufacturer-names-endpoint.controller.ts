import { Controller, HttpException, HttpStatus, ParseIntPipe, Put, Query } from '@nestjs/common';
import { combineLatest, forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { Prisma } from '@prisma/client';

import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { RequiredMouserManufacturerName } from './manufacturer-names-endpoint.types';
import { ManufacturerNamesTableService } from '../../../modules/db-data-handler/tables/mouser-tables/manufacturer-names/manufacturer-names-table.service';
import { ManufacturerListApiService } from '../../../modules/mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list-api.service';
import { getNowDateISO, catchAndThrowException } from '../../../utils';
import { ResponseDto } from '../../../abstract/response.dto';

@Controller('manufacturer-names')
export class ManufacturerNamesEndpointController {
  constructor(
    private readonly manufacturerNamesTableService: ManufacturerNamesTableService,
    private readonly manufacturerListApiService: ManufacturerListApiService,
  ) {}

  @Put()
  updateManufacturerNames(@Query('accountId', ParseIntPipe) accountId: number) {
    return forkJoin([
      this.manufacturerListApiService.getManufactures(accountId),
      this.manufacturerNamesTableService.getManufacturesCount(),
    ]).pipe(
      switchMap(([mouserManufactures, dbManufacturesCount]) => {
        if (!this.isManufacturesAndCountNotEquals(mouserManufactures, dbManufacturesCount))
          throw new HttpException('Нечего обновлять. Количество мануфактур равно.', HttpStatus.ACCEPTED);

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

  private writeManufactureNamesToDb(
    mouserManufactureNames: RequiredMouserManufacturerName[],
  ): Observable<ResponseDto<number>> {
    const manufacturesForDb = this.prepareManufacturesForDb(mouserManufactureNames);
    return from(this.manufacturerNamesTableService.createMany(manufacturesForDb)).pipe(
      map(dbResponse =>
        ResponseDto.generateResponse(HttpStatus.OK, 'Записи успешно созданы в количестве:', dbResponse.count),
      ),
      catchAndThrowException()
    );
  }

  private prepareManufacturesForDb(
    mouserManufactureNames: RequiredMouserManufacturerName[],
  ): Prisma.ManufacturerNamesCreateInput[] {
    return mouserManufactureNames?.map(({ ManufacturerName }) => ({
      manufacturer_name: ManufacturerName,
      last_updated: getNowDateISO(),
    }));
  }
}
