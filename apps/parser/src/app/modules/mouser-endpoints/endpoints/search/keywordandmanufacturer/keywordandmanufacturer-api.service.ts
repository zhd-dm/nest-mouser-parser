import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { MouserConnectionService } from '../../../../mouser-connection/mouser-connection.service';
import { SearchResponseRoot } from '@mouser-swagger/v2';
import { KeywordandmanufacturerBodyDto } from './dto/keywordandmanufacturer.body-dto';
import { KEYWORD_AND_MANUFACTURER, SEARCH_BASE_ENDPOINT } from '../search-endpoint.consts';
import { catchAndThrowException } from '../../../../../utils';

@Injectable()
export class KeywordandmanufacturerApiService {
  constructor(private readonly mouserConnectionService: MouserConnectionService) {}

  // TODO: Observable<SearchResponseRoot> !!!!
  postKeywordandmanufacturer(dto: KeywordandmanufacturerBodyDto, accountId: number): Observable<SearchResponseRoot> {
    return this.mouserConnectionService
      .post<SearchResponseRoot, { SearchByKeywordMfrNameRequest: KeywordandmanufacturerBodyDto }>(
        `${SEARCH_BASE_ENDPOINT}/${KEYWORD_AND_MANUFACTURER}`,
        accountId,
        {
          SearchByKeywordMfrNameRequest: dto,
        },
      )
      .pipe(map(({ data }) => data), catchAndThrowException());
  }
}
