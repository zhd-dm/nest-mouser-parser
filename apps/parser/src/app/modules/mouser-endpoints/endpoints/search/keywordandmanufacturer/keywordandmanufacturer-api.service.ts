import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { MouserConnectionService } from '../../../../mouser-connection/mouser-connection.service';
import { SearchResponseRoot } from '@mouser-swagger/v2';
import { KeywordandmanufacturerDto } from './keywordandmanufacturer.dto';
import { KEYWORD_AND_MANUFACTURER, SEARCH_BASE_ENDPOINT } from '../search-endpoint.consts';

@Injectable()
export class KeywordandmanufacturerApiService {
  constructor(private readonly mouserConnectionService: MouserConnectionService) {}

  // TODO: Observable<SearchResponseRoot> !!!!
  postKeywordandmanufacturer(dto: KeywordandmanufacturerDto): Observable<SearchResponseRoot> {
    return this.mouserConnectionService
      .post<SearchResponseRoot, { SearchByKeywordMfrNameRequest: KeywordandmanufacturerDto }>(
        `${SEARCH_BASE_ENDPOINT}/${KEYWORD_AND_MANUFACTURER}`,
        // TODO: динамически подставлять айдишник
        1,
        {
          SearchByKeywordMfrNameRequest: dto,
        },
      )
      .pipe(map(({ data }) => data));
  }
}
