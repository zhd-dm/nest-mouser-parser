import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerDto } from './keywordandmanufacturer.dto';
import { SearchResponseRoot } from '@mouser-swagger/v2';

@Controller('keywordandmanufacturer')
export class KeywordandmanufacturerApiController {
  constructor(private readonly keywordandmanufacturerApiService: KeywordandmanufacturerApiService) {}

  @Post()
  getData(@Body() dto: KeywordandmanufacturerDto): Observable<SearchResponseRoot> {
    return this.keywordandmanufacturerApiService.postKeywordandmanufacturer(dto).pipe();
  }
}
