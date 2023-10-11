import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerApiController } from './keywordandmanufacturer-api.controller';
import { MouserConnectionService } from '../../../services/mouser-connection.service';

@Module({
  imports: [HttpModule],
  controllers: [KeywordandmanufacturerApiController],
  providers: [MouserConnectionService, KeywordandmanufacturerApiService],
  exports: [KeywordandmanufacturerApiService]
})
export class KeywordandmanufacturerModule {}
