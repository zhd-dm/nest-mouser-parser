import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { SearchResponseRoot } from '@mouser-swagger/v2';
import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerDto } from './keywordandmanufacturer.dto';
import { KEYWORD_AND_MANUFACTURER } from '../search-endpoint.consts';

@Controller(KEYWORD_AND_MANUFACTURER)
export class KeywordandmanufacturerApiController {
  constructor(private readonly keywordandmanufacturerApiService: KeywordandmanufacturerApiService) {}

  @Post()
  getData(@Body() dto: KeywordandmanufacturerDto): Observable<SearchResponseRoot> {
    console.log(dto)
    return this.keywordandmanufacturerApiService.postKeywordandmanufacturer(dto);
  }
}
