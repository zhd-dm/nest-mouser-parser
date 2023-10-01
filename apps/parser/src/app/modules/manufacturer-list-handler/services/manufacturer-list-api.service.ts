import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";

import { MouserManufacturerList } from "@mouser-swagger";

@Injectable()
export class ManufacturerListApiService {
  getManufactures(): Observable<MouserManufacturerList> {
    return of({ Count: 10, ManufacturerList: [] });
  }
}
