import { Module } from '@nestjs/common';

import { MouserAccountApiCallTableService } from './mouser-account-api-call-table.service';
import { PrismaService } from '../../../../prisma/prisma.service';

@Module({
  providers: [PrismaService, MouserAccountApiCallTableService],
  exports: [MouserAccountApiCallTableService]
})
export class MouserAccountApiCallTableModule {}
