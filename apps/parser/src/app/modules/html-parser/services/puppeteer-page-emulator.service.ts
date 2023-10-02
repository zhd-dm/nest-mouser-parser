import puppeteer, { HTTPResponse } from 'puppeteer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PuppeteerPageEmulatorService {
  async getPageWithData(url: string): Promise<HTTPResponse | null> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    console.log(url)
    return page.goto(url);
  }
}
