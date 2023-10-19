import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AdminEndpointModule } from './routes/admin/admin-endpoint.module';
import { TestingEndpointModule } from './routes/testing/testing-endpoint.module';
import { MouserEndpointsModule } from './routes/mouser-endpoints/mouser-endpoints.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
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
