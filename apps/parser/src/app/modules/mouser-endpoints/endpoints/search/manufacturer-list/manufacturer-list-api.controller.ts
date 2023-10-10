import { Controller, Get } from "@nestjs/common";
import { Observable } from "rxjs";

import { ManufacturerListApiService } from "./manufacturer-list-api.service";
import { MouserManufacturersNameRoot } from "@mouser-swagger/v2";
import { MANUFACTURER_LIST } from '../search-endpoint.consts';

@Controller(MANUFACTURER_LIST)
export class ManufacturerListApiController {
  constructor(private readonly manufacturerListApiService: ManufacturerListApiService) {}

  @Get()
  getData(): Observable<MouserManufacturersNameRoot> {
    return this.manufacturerListApiService.getManufactures();
  }
}
