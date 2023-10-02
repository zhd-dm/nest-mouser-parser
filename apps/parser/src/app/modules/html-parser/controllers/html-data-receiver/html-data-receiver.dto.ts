import { IsNotEmpty } from 'class-validator';

export class htmlDataFromUrlDto {
  @IsNotEmpty()
  domain = '';

  @IsNotEmpty()
  param = '';

  @IsNotEmpty()
  query = '';
}
