import { Module } from '@nestjs/common';

import { MouserAccountApiCallTableService } from './mouser-account-api-call-table.service';
import { PrismaModule } from '../../../../../core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MouserAccountApiCallTableService],
  exports: [MouserAccountApiCallTableService]
})
export class MouserAccountApiCallTableModule {}
