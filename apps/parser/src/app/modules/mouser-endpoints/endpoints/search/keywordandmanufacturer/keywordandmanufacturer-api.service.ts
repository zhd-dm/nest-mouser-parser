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
    const apiV2Url = this.mouserConnectionService.apiV2Url;
    const apiKey = this.mouserConnectionService.apiKey;

    return this.httpService
      .post<SearchResponseRoot>(`${apiV2Url}/${SEARCH_BASE_ENDPOINT}/${KEYWORD_AND_MANUFACTURER}?apiKey=${apiKey}`, {
        SearchByKeywordMfrNameRequest: dto,
      })
      .pipe(map(({ data }) => data));
  }
}
