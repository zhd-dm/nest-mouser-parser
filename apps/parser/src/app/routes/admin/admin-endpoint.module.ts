import { Module } from '@nestjs/common';

import { AppAccountTableModule } from '../../modules/db-data-handler/tables/application-configuration-tables/app-account/app-account-table.module';
import { AppAccountEndpointController } from './app-account/app-account-endpoint.controller';
import { ManufacturerNamesTableModule } from '../../modules/db-data-handler/tables/mouser-tables/manufacturer-names/manufacturer-names-table.module';
import { ManufacturerNamesEndpointController } from './manufacturer-names/manufacturer-names-endpoint.controller';
import {
  ManufacturerListModule
} from '../../modules/mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list.module';

@Module({
  imports: [
    // app-account
    AppAccountTableModule,
    // manufacturer-names
    ManufacturerNamesTableModule,
    ManufacturerListModule,
  ],
  controllers: [AppAccountEndpointController, ManufacturerNamesEndpointController],
})
export class AdminEndpointModule {}
