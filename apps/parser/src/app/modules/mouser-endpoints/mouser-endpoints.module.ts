import { Module } from '@nestjs/common';

import { ManufacturerListModule } from './endpoints/search/manufacturer-list/manufacturer-list.module';

@Module({
  imports: [ManufacturerListModule]
})
export class MouserEndpointsModule {}
