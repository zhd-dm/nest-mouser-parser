import { Injectable } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

import { MouserConnectionService } from '../../../../mouser-connection/mouser-connection.service';
import { MouserManufacturersNameRoot } from '@mouser-swagger/v2';
import { MANUFACTURER_LIST, SEARCH_BASE_ENDPOINT } from '../search-endpoint.consts';
import { catchAndThrowException } from '../../../../../core/utils';

@Injectable()
export class ManufacturerListApiService {
  constructor(private readonly mouserConnectionService: MouserConnectionService) {}

  getManufactures(accountId: number): Observable<MouserManufacturersNameRoot> {
    return this.mouserConnectionService
      .get<MouserManufacturersNameRoot>(`${SEARCH_BASE_ENDPOINT}/${MANUFACTURER_LIST}`, accountId)
      .pipe(map(({ data }) => data), catchAndThrowException());
  }
}
