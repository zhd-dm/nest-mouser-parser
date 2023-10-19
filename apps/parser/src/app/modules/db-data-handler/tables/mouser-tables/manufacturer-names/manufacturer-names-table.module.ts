import { Module } from '@nestjs/common';

import { ManufacturerNamesTableService } from './manufacturer-names-table.service';
import { PrismaModule } from '../../../../../core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ManufacturerNamesTableService],
  exports: [ManufacturerNamesTableService]
})
export class ManufacturerNamesTableModule {}
