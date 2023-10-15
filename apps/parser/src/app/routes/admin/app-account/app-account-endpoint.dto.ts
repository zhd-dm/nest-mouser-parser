import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Prisma } from '@prisma/client';

export class AppAccountEndpointDto implements Prisma.AppAccountCreateInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(300)
  account_name = '';

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(300)
  account_email = '';

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
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
