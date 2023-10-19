import { Body, Controller, ParseIntPipe, Post, Query } from '@nestjs/common';
import {
  KeywordandmanufacturerApiService
} from '../../../modules/mouser-endpoints/endpoints/search/keywordandmanufacturer/keywordandmanufacturer-api.service';
import {
  ManufacturersBodyDto
} from './dto/manufacturers-body.dto';
import { Observable } from 'rxjs';
import { SearchResponseRoot } from '@mouser-swagger/v2';

@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly keywordandmanufacturerApiService: KeywordandmanufacturerApiService) {}

  @Post()
  getData(
    @Body() bodyDto: ManufacturersBodyDto,
    @Query('accountId', ParseIntPipe) accountId: number,
  ): Observable<SearchResponseRoot> {
    return this.keywordandmanufacturerApiService.postKeywordandmanufacturer(bodyDto, accountId);
  }
}
