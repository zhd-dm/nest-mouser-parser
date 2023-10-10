import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

import { MouserConnectionService } from '../../../services/mouser-connection.service';
import { MouserManufacturersRoot } from '@mouser-swagger/v1';

@Injectable()
export class ManufacturerListApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mouserConnectionService: MouserConnectionService,
  ) {}

  getManufactures(): Observable<MouserManufacturersRoot> {
    return this.httpService
      .get<MouserManufacturersRoot>(
        `${this.mouserConnectionService.apiV2Url}/search/manufacturerlist?apiKey=${this.mouserConnectionService.apiKey}`,
      )
      .pipe(map(({ data }) => data));
  }
}
