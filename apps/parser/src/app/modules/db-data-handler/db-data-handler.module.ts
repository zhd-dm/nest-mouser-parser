import { Module } from '@nestjs/common';

import { ManufacturerListTableModule } from './tables/manufacturer-list-table.module';

@Module({
  imports: [ManufacturerListTableModule]
})
export class DbDataHandlerModule {}
