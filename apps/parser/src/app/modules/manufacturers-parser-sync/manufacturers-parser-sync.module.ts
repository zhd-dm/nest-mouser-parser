import { Module } from '@nestjs/common';

import { ParserLauncherService } from './services/parser-launcher-service';

@Module({
  providers: [ParserLauncherService]
})
export class ManufacturersParserSyncModule {}
