import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { SearchByKeywordMfrNameRequest } from '@mouser-swagger/v2';

export class KeywordandmanufacturerDto implements SearchByKeywordMfrNameRequest{
  @IsNotEmpty()
  @IsString()
  manufacturerName = '';

  @IsNotEmpty()
  @IsString()
  keyword = '';

  @IsNotEmpty()
  @IsNumber()
  records = 0;

  @IsNotEmpty()
  @IsNumber()
  pageNumber = 0;

  @IsString()
  searchOptions = ''

  @IsString()
  searchWithYourSignUpLanguage = ''
}
