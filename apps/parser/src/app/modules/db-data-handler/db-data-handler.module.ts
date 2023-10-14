import { Module } from '@nestjs/common';

import { ManufacturerNamesTableModule } from './tables/manufacturer-names-table.module';

@Module({
  imports: [ManufacturerNamesTableModule]
})
export class DbDataHandlerModule {}
