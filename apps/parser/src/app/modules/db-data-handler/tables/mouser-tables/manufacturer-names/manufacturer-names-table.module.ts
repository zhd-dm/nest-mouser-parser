import { Module } from '@nestjs/common';

import { PrismaService } from '../../../../prisma/prisma.service';
import { ManufacturerNamesTableService } from './manufacturer-names-table.service';

@Module({
  providers: [PrismaService, ManufacturerNamesTableService],
  exports: [ManufacturerNamesTableService]
})
export class ManufacturerNamesTableModule {}
