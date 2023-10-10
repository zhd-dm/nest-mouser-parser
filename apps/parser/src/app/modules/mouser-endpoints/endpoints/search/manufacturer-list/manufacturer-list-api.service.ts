import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

import { MouserConnectionService } from '../../../services/mouser-connection.service';
import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { MANUFACTURER_LIST, SEARCH_BASE_ENDPOINT } from '../search-endpoint.consts';

@Injectable()
export class ManufacturerListApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mouserConnectionService: MouserConnectionService,
  ) {}

  getManufactures(): Observable<MouserManufacturersNameRoot> {
    const apiV2Url = this.mouserConnectionService.apiV2Url;
    const apiKey = this.mouserConnectionService.apiKey;

    return this.httpService
      .get<MouserManufacturersNameRoot>(`${apiV2Url}/${SEARCH_BASE_ENDPOINT}/${MANUFACTURER_LIST}?apiKey=${apiKey}`)
      .pipe(map(({ data }) => data));
  }
}
