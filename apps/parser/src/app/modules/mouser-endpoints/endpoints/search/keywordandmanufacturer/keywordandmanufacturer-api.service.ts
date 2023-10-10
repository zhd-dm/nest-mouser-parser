import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

import { MouserConnectionService } from '../../../services/mouser-connection.service';
import { SearchResponseRoot } from '@mouser-swagger/v2';
import { KeywordandmanufacturerDto } from './keywordandmanufacturer.dto';
import { KEYWORD_AND_MANUFACTURER, SEARCH_BASE_ENDPOINT } from '../search-endpoint.consts';

@Injectable()
export class KeywordandmanufacturerApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mouserConnectionService: MouserConnectionService,
  ) {}

  postKeywordandmanufacturer(dto: KeywordandmanufacturerDto): Observable<SearchResponseRoot> {
    return this.httpService
      .post<SearchResponseRoot>(
        `${this.mouserConnectionService.apiV2Url}/${SEARCH_BASE_ENDPOINT}/${KEYWORD_AND_MANUFACTURER}?apiKey=${this.mouserConnectionService.apiKey}`,
        { SearchByKeywordMfrNameRequest: dto },
      )
      .pipe(map(({ data }) => data));
  }
}
