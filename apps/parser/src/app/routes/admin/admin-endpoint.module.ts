import { Module } from '@nestjs/common';

import { AppAccountTableModule } from '../../modules/db-data-handler/tables/application-configuration-tables/app-account/app-account-table.module';
import { AppAccountEndpointController } from './app-account/app-account-endpoint.controller';
import { ManufacturerNamesTableModule } from '../../modules/db-data-handler/tables/mouser-tables/manufacturer-names/manufacturer-names-table.module';
import { ManufacturerNamesEndpointController } from './manufacturer-names/manufacturer-names-endpoint.controller';
import {
  ManufacturerListModule
} from '../../modules/mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list.module';
import { ManufacturersController } from './manufacturers/manufacturers.controller';
import {
  KeywordandmanufacturerModule
} from '../../modules/mouser-endpoints/endpoints/search/keywordandmanufacturer/keywordandmanufacturer.module';

@Module({
  imports: [
    // app-account
    AppAccountTableModule,
    // manufacturer-names
    ManufacturerNamesTableModule,
    ManufacturerListModule,
    // manufacturers
    KeywordandmanufacturerModule
  ],
  controllers: [AppAccountEndpointController, ManufacturerNamesEndpointController, ManufacturersController],
})
export class AdminEndpointModule {}
