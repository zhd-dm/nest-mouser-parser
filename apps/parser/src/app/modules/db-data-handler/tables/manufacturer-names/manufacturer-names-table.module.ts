import { Module } from '@nestjs/common';

import { PrismaService } from '../../../prisma/prisma.service';
import { ManufacturerNamesTableService } from './manufacturer-names-table.service';
import { ManufacturerNamesTableController } from './manufacturer-names-table.controller';
import { ManufacturerListModule } from '../../../mouser-endpoints/endpoints/search/manufacturer-list/manufacturer-list.module';

@Module({
  imports: [ManufacturerListModule],
  controllers: [ManufacturerNamesTableController],
  providers: [PrismaService, ManufacturerNamesTableService],
})
export class ManufacturerNamesTableModule {}
