import { Controller, Get } from '@nestjs/common';

import { AppAccountTableService } from '../db-data-handler/tables/application-configuration-tables/app-account/app-account-table.service';

@Controller()
export class TestingEndpointController {
  constructor(private readonly appAccountTableService: AppAccountTableService) {}

  @Get('available-account-id')
  getAvailableAccountId() {
    return this.appAccountTableService.getAvailableAccountId()
  }

  @Get('how-many-calls-account-make-today')
  getHowManyCallsAccountMakeToday() {
    return this.appAccountTableService.getHowManyCallsAccountMakeToday(1232)
  }

  @Get('account-ids')
  getAccountIds() {
    return this.appAccountTableService.getAccountIds()
  }
}
