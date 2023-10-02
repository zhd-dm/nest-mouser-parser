import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

import { MouserManufacturersRoot } from '@mouser-swagger';
import { MouserConnectionService } from '../../../../services/mouser-connection.service';

@Injectable()
export class ManufacturerListApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mouserConnectionService: MouserConnectionService,
  ) {}

  getManufactures(): Observable<MouserManufacturersRoot> {
    return this.httpService
      .get<MouserManufacturersRoot>(
        `${this.mouserConnectionService.apiUrl}/search/manufacturerlist?apiKey=${this.mouserConnectionService.apiKey}`,
      )
      .pipe(map(({ data }) => data));
  }
}
