import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { MouserConnectionService } from './mouser-connection.service';
import { AppAccountTableModule } from '../db-data-handler/tables/application-configuration-tables/app-account/app-account-table.module';
import { MouserAccountApiCallTableModule } from '../db-data-handler/tables/application-configuration-tables/mouser-account-api-call/mouser-account-api-call-table.module';
import { MouserApiKeyGetterService } from './services/mouser-api-key-getter.service';

@Module({
  imports: [HttpModule, AppAccountTableModule, MouserAccountApiCallTableModule],
  providers: [MouserConnectionService, MouserApiKeyGetterService],
  exports: [MouserConnectionService],
})
export class MouserConnectionModule {}
