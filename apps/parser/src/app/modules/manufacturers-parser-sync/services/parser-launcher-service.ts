import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ParserLauncherService {
  @Cron(CronExpression.EVERY_SECOND)
  launch(): void {
    console.log('launch')
  }
}
