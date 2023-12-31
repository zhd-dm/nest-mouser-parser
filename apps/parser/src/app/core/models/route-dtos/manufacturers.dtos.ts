import { SearchByKeywordMfrNameRequest } from '@mouser-swagger/v2';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class ManufacturersBodyDto implements SearchByKeywordMfrNameRequest{
  @IsNotEmpty()
  @IsString()
  manufacturerName = '';

  @IsNotEmpty()
  @IsString()
  keyword = '';

  @IsNotEmpty()
  @IsNumber()
  @Max(50)
  @Min(1)
  records = 50;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  pageNumber = 0;

  @IsString()
  searchOptions = ''

  @IsString()
  searchWithYourSignUpLanguage = ''
}
