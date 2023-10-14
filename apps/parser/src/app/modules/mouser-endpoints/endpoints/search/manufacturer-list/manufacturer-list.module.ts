import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ManufacturerListApiController } from './manufacturer-list-api.controller';
import { ManufacturerListApiService } from './manufacturer-list-api.service';
import { MouserConnectionModule } from '../../../../mouser-connection/mouser-connection.module';

@Module({
  // TODO: удалить
  imports: [HttpModule, MouserConnectionModule],
  controllers: [ManufacturerListApiController],
  providers: [ManufacturerListApiService],
  exports: [ManufacturerListApiService],
})
export class ManufacturerListModule {}
