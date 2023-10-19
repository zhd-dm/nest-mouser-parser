import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { MouserConnectionService } from '../../../../mouser-connection/mouser-connection.service';
import { SearchResponseRoot } from '@mouser-swagger/v2';
import { KEYWORD_AND_MANUFACTURER, SEARCH_BASE_ENDPOINT } from '../search-endpoint.consts';
import { catchAndThrowException } from '../../../../../utils';
import { ManufacturersBodyDto } from '../../../../../models';

@Injectable()
export class KeywordandmanufacturerApiService {
  constructor(private readonly mouserConnectionService: MouserConnectionService) {}

  postKeywordandmanufacturer(dto: ManufacturersBodyDto, accountId: number): Observable<SearchResponseRoot> {
    return this.mouserConnectionService
      .post<SearchResponseRoot, { SearchByKeywordMfrNameRequest: ManufacturersBodyDto }>(
        `${SEARCH_BASE_ENDPOINT}/${KEYWORD_AND_MANUFACTURER}`,
        accountId,
        {
          SearchByKeywordMfrNameRequest: dto,
        },
      )
      .pipe(map(({ data }) => data), catchAndThrowException())
  }
}
