import { Module } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { ManufacturerListTableService } from './manufacturer-list-table.service';
import { ManufacturerListTableController } from './manufacturer-list-table.controller';

@Module({
  controllers: [ManufacturerListTableController],
  providers: [PrismaService, ManufacturerListTableService]
})
export class ManufacturerListTableModule {}
