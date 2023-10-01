import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ManufacturerListHandlerModule } from './modules/manufacturer-list-handler/manufacturer-list-handler.module';

@Module({
  imports: [ManufacturerListHandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
