import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';

import { ManufacturerListApiController } from './controllers/manufacturer-list-api.controller';
import { ManufacturerListApiService } from './services/manufacturer-list-api.service';

@Module({
  imports: [HttpModule],
  controllers: [ManufacturerListApiController],
  providers: [ManufacturerListApiService],
})
export class ManufacturerListHandlerModule {}
