import { Module } from '@nestjs/common';

import { AppAccountTableService } from './app-account-table.service';
import { PrismaService } from '../../../../prisma/prisma.service';

@Module({
  providers: [PrismaService, AppAccountTableService],
  exports: [AppAccountTableService]
})
export class AppAccountTableModule {}
