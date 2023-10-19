import { Module } from '@nestjs/common';

import { KeywordandmanufacturerApiService } from './keywordandmanufacturer-api.service';
import { MouserConnectionModule } from '../../../../mouser-connection/mouser-connection.module';

@Module({
  imports: [MouserConnectionModule],
  providers: [KeywordandmanufacturerApiService],
  exports: [KeywordandmanufacturerApiService],
})
export class KeywordandmanufacturerModule {}
