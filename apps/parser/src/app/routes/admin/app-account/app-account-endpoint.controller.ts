import { Body, Controller, Post } from '@nestjs/common';

import { AppAccountEndpointDto } from './app-account-endpoint.dto';
import { AppAccountTableService } from '../../../modules/db-data-handler/tables/application-configuration-tables/app-account/app-account-table.service';

@Controller('app-account')
export class AppAccountEndpointController {
  constructor(private readonly appAccountTableService: AppAccountTableService) {}

  @Post()
  createAccount(@Body() dto: AppAccountEndpointDto) {
    return this.appAccountTableService.createAccount(dto);
  }
}
