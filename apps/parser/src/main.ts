/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ConfigService } from '@nestjs/config';

import { AppModule } from "./app/app.module";
import { EnvironmentVariables } from './app/interfaces/environment/environment.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<EnvironmentVariables>);
  const globalPrefix = "mouser-parser";
  app.setGlobalPrefix(globalPrefix);
  const port = configService.get('PORT') || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
