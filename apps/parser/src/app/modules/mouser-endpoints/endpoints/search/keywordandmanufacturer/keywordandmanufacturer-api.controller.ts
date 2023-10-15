import { Body, Controller, Post } from '@nestjs/common';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerDto } from './keywordandmanufacturer.dto';

@Controller('keywordandmanufacturer')
export class KeywordandmanufacturerApiController {
  constructor(private readonly keywordandmanufacturerApiService: KeywordandmanufacturerApiService) {}

  @Post()
  // TODO: : Observable<SearchResponseRoot> !!!
  getData(@Body() dto: KeywordandmanufacturerDto) {
    return this.keywordandmanufacturerApiService.postKeywordandmanufacturer(dto);
  }
}
