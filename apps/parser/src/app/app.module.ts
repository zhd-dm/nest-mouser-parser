import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MouserEndpointsModule } from './modules/mouser-endpoints/mouser-endpoints.module';
import { DbDataHandlerModule } from './modules/db-data-handler/db-data-handler.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
    MouserEndpointsModule,
    DbDataHandlerModule,
    // HtmlParserModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
