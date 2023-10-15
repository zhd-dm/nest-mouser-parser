import { Module } from '@nestjs/common';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { KeywordandmanufacturerApiController } from './keywordandmanufacturer-api.controller';
import { MouserConnectionModule } from '../../../../mouser-connection/mouser-connection.module';

@Module({
  imports: [MouserConnectionModule],
  controllers: [KeywordandmanufacturerApiController],
  providers: [KeywordandmanufacturerApiService],
  exports: [KeywordandmanufacturerApiService],
})
export class KeywordandmanufacturerModule {}
