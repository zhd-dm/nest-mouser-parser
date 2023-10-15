import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Prisma } from '@prisma/client';

export class AppAccountEndpointDto implements Prisma.AppAccountCreateInput {
  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  account_name = '';

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  account_email = '';

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  account_password = '';

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  account_first_api_key = '';

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  account_second_api_key = '';
}
