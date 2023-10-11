import { Module } from '@nestjs/common';

import { ManufacturerListTableService } from './tables/manufacturer-list-table.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService, ManufacturerListTableService],
})
export class DbDataHandlerModule {}
