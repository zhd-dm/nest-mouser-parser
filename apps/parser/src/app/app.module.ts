import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MouserEndpointsModule } from './modules/mouser-endpoints/mouser-endpoints.module';
import {
  ManufacturerNamesTableModule
} from './modules/db-data-handler/tables/mouser-tables/manufacturer-names/manufacturer-names-table.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
    RouterModule.register([
      {
        path: 'mouser-endpoints',
        module: MouserEndpointsModule
      },
      {
        path: 'admin',
        module: ManufacturerNamesTableModule
      }
    ]),
    MouserEndpointsModule,
    ManufacturerNamesTableModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
