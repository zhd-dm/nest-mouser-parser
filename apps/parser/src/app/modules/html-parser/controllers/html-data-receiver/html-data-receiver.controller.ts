import { Body, Controller, Post } from '@nestjs/common';
import { HTTPResponse } from 'puppeteer';

import { PuppeteerPageEmulatorService } from '../../services/puppeteer-page-emulator.service';
import { htmlDataFromUrlDto } from './html-data-receiver.dto';


@Controller('html-data-receiver')
export class HtmlDataReceiverController {
  constructor(private readonly puppeteerPageEmulatorService: PuppeteerPageEmulatorService) {}

  @Post()
  async htmlDataFromUrl(@Body() htmlDataFromUrlDto: htmlDataFromUrlDto): Promise<HTTPResponse | null> {
    const { domain, param, query } = htmlDataFromUrlDto;
    console.log(htmlDataFromUrlDto);
    const url = `${domain}/${param}?${query}`;
    return await this.puppeteerPageEmulatorService.getPageWithData(url);
  }
}
