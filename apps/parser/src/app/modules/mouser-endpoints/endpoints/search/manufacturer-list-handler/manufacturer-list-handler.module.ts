import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';

import { ManufacturerListApiController } from './controllers/manufacturer-list-api.controller';
import { ManufacturerListApiService } from './services/manufacturer-list-api.service';
import { MouserConnectionService } from '../../../services/mouser-connection.service';

@Module({
  imports: [HttpModule],
  controllers: [ManufacturerListApiController],
  providers: [MouserConnectionService, ManufacturerListApiService],
})
export class ManufacturerListHandlerModule {}
