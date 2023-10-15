import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ManufacturerListApiService } from './manufacturer-list-api.service';
import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';

@Controller('manufacturerlist')
export class ManufacturerListApiController {
  constructor(private readonly manufacturerListApiService: ManufacturerListApiService) {}

  @Get()
  getData(): Observable<MouserManufacturersNameRoot> {
    return this.manufacturerListApiService.getManufactures();
  }
}
