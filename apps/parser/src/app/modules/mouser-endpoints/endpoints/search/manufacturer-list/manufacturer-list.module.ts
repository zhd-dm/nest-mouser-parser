import { Module } from '@nestjs/common';

import { ManufacturerListApiService } from './manufacturer-list-api.service';
import { MouserConnectionModule } from '../../../../mouser-connection/mouser-connection.module';

@Module({
  imports: [MouserConnectionModule],
  providers: [ManufacturerListApiService],
  exports: [ManufacturerListApiService],
})
export class ManufacturerListModule {}
