import { Controller, Get } from "@nestjs/common";
import { Observable } from "rxjs";

import { ManufacturerListApiService } from "../services/manufacturer-list-api.service";
import { MouserManufacturersRoot } from "@mouser-swagger";

@Controller("manufacturer-list")
export class ManufacturerListApiController {
  constructor(private readonly manufacturerListApiService: ManufacturerListApiService) {}

  @Get()
  getData(): Observable<MouserManufacturersRoot> {
    return this.manufacturerListApiService.getManufactures();
  }
}
