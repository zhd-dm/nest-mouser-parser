import { Module } from '@nestjs/common';

import { AppAccountTableService } from './app-account-table.service';
import { PrismaModule } from '../../../../../core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AppAccountTableService],
  exports: [AppAccountTableService]
})
export class AppAccountTableModule {}
