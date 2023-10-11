import { Module } from '@nestjs/common';

import { ManufacturerListModule } from './endpoints/search/manufacturer-list/manufacturer-list.module';
import { KeywordandmanufacturerModule } from './endpoints/search/keywordandmanufacturer/keywordandmanufacturer.module';

@Module({
  imports: [ManufacturerListModule, KeywordandmanufacturerModule],
})
export class MouserEndpointsModule {}
