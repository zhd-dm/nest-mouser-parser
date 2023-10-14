import { Module } from '@nestjs/common';

import { ManufacturerNamesTableModule } from './tables/manufacturer-names/manufacturer-names-table.module';
import { AppAccountTableModule } from './tables/app-account/app-account-table.module';
import { MouserAccountApiCallTableModule } from './tables/mouser-account-api-call/mouser-account-api-call-table.module';

@Module({
  imports: [ManufacturerNamesTableModule, AppAccountTableModule, MouserAccountApiCallTableModule],
  exports: [AppAccountTableModule, MouserAccountApiCallTableModule],
})
export class DbDataHandlerModule {}
