import { Module } from '@nestjs/common';

import { ManufacturerListHandlerModule } from './endpoints/search/manufacturer-list-handler/manufacturer-list-handler.module';

@Module({
  imports: [ManufacturerListHandlerModule]
})
export class MouserEndpointsModule {}
