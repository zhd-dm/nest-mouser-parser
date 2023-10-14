import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { MouserConnectionService } from './mouser-connection.service';
import { AppAccountTableModule } from '../db-data-handler/tables/app-account/app-account-table.module';
import { MouserAccountApiCallTableModule } from '../db-data-handler/tables/mouser-account-api-call/mouser-account-api-call-table.module';

@Module({
  imports: [HttpModule, AppAccountTableModule, MouserAccountApiCallTableModule],
  providers: [MouserConnectionService],
  exports: [MouserConnectionService],
})
export class MouserConnectionModule {}
