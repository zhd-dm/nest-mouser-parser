import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';

import { ManufacturerListApiController } from './manufacturer-list-api.controller';
import { ManufacturerListApiService } from './manufacturer-list-api.service';
import { MouserConnectionService } from '../../../services/mouser-connection.service';

@Module({
  imports: [HttpModule],
  controllers: [ManufacturerListApiController],
  providers: [MouserConnectionService, ManufacturerListApiService],
  exports: [ManufacturerListApiService],
})
export class ManufacturerListModule {}
