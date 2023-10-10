import { Controller, Get } from "@nestjs/common";
import { Observable } from "rxjs";

import { ManufacturerListApiService } from "./manufacturer-list-api.service";
import { MouserManufacturersRoot } from "@mouser-swagger/v1";

@Controller("manufacturer-list")
export class ManufacturerListApiController {
  constructor(private readonly manufacturerListApiService: ManufacturerListApiService) {}

  @Get()
  getData(): Observable<MouserManufacturersRoot> {
    return this.manufacturerListApiService.getManufactures();
  }
}
