import { Body, Controller, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerBodyDto } from './dto/keywordandmanufacturer.body-dto';
import { SearchResponseRoot } from '@mouser-swagger/v2';

@Controller('keywordandmanufacturer')
export class KeywordandmanufacturerApiController {
  constructor(private readonly keywordandmanufacturerApiService: KeywordandmanufacturerApiService) {}

  /**
   * @deprecated Нужно контроллер перенести в `routes`
   */
  @Post()
  getData(
    @Body() bodyDto: KeywordandmanufacturerBodyDto,
    @Query('accountId', ParseIntPipe) accountId: number,
  ): Observable<SearchResponseRoot> {
    return this.keywordandmanufacturerApiService.postKeywordandmanufacturer(bodyDto, accountId);
  }
}
