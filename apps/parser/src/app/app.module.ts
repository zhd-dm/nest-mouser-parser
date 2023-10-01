import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ManufacturerListHandlerModule } from './modules/manufacturer-list-handler/manufacturer-list-handler.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      isGlobal: true
    }),
    ManufacturerListHandlerModule
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
