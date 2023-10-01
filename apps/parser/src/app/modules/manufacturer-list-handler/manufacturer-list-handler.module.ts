import { Module } from "@nestjs/common";

import { ManufacturerListApiController } from './controllers/manufacturer-list-api.controller';
import { ManufacturerListApiService } from './services/manufacturer-list-api.service';

@Module({
  imports: [],
  controllers: [ManufacturerListApiController],
  providers: [ManufacturerListApiService],
})
export class ManufacturerListHandlerModule {}
