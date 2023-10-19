import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ManufacturerListApiService } from './manufacturer-list-api.service';
import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';

@Controller('manufacturerlist')
export class ManufacturerListApiController {
  constructor(private readonly manufacturerListApiService: ManufacturerListApiService) {}

  /**
   * @deprecated Нужно контроллер перенести в `routes`
   */
  @Get()
  getData(@Query('accountId', ParseIntPipe) accountId: number): Observable<MouserManufacturersNameRoot> {
    return this.manufacturerListApiService.getManufactures(accountId);
  }
}
