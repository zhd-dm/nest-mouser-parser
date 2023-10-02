import { Module } from '@nestjs/common'

import { PuppeteerPageEmulatorService } from './services/puppeteer-page-emulator.service';
import { HtmlDataReceiverController } from './controllers/html-data-receiver/html-data-receiver.controller';

@Module({
  controllers: [HtmlDataReceiverController],
  providers: [PuppeteerPageEmulatorService]
})
export class HtmlParserModule {}

