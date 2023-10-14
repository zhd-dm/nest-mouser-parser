import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerApiController } from './keywordandmanufacturer-api.controller';
import { MouserConnectionModule } from '../../../../mouser-connection/mouser-connection.module';

@Module({
  // TODO: удалить
  imports: [HttpModule, MouserConnectionModule],
  controllers: [KeywordandmanufacturerApiController],
  providers: [KeywordandmanufacturerApiService],
  exports: [KeywordandmanufacturerApiService],
})
export class KeywordandmanufacturerModule {}
