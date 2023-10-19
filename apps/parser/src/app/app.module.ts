import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AdminEndpointModule } from './routes/admin/admin-endpoint.module';
import { TestingEndpointModule } from './routes/testing/testing-endpoint.module';
import { MouserEndpointsModule } from './routes/mouser-endpoints/mouser-endpoints.module';
import { ManufacturersParserSyncModule } from './modules/manufacturers-parser-sync/manufacturers-parser-sync.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),

    // Cron
    ScheduleModule.forRoot(),
    ManufacturersParserSyncModule,

    // Routes
    RouterModule.register([
      {
        path: 'admin',
        module: AdminEndpointModule,
      },
      {
        path: 'mouser-endpoints',
        module: MouserEndpointsModule,
      },
      {
        path: 'testing',
        module: TestingEndpointModule,
      },
    ]),
    AdminEndpointModule,
    MouserEndpointsModule,
    TestingEndpointModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}
