import { Module } from '@nestjs/common';
import {
  ManufacturerNamesTableModule
} from '../../modules/db-data-handler/tables/mouser-tables/manufacturer-names/manufacturer-names-table.module';
import {
  ManufacturerListModule
} from '../../modules/mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list.module';
import {
  KeywordandmanufacturerModule
} from '../../modules/mouser-endpoints/endpoints/search/keywordandmanufacturer/keywordandmanufacturer.module';
import {
  ManufacturerNamesEndpointController
} from './manufacturer-names/manufacturer-names-endpoint.controller';
import { ManufacturersController } from './manufacturers/manufacturers.controller';

@Module({
  imports: [
    // manufacturer-names
    ManufacturerNamesTableModule,
    ManufacturerListModule,
    // manufacturers
    KeywordandmanufacturerModule
  ],
  controllers: [ManufacturerNamesEndpointController, ManufacturersController],
})
export class MouserEndpointsModule {}
