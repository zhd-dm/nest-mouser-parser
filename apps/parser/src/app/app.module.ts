import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MouserEndpointsModule } from './modules/mouser-endpoints/mouser-endpoints.module';
import { AdminEndpointModule } from './routes/admin/admin-endpoint.module';
import { TestingEndpointModule } from './modules/_testing-endpoint/testing-endpoint.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
    RouterModule.register([
      // TODO: поправить endpoint, сейчас без mouser-endpoints
      {
        path: 'mouser-endpoints',
        module: MouserEndpointsModule,
      },
      {
        path: 'admin',
        module: AdminEndpointModule,
      },
      {
        path: 'testing',
        module: TestingEndpointModule,
      },
    ]),
    MouserEndpointsModule,
    AdminEndpointModule,
    TestingEndpointModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
