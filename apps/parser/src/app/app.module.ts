import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminEndpointModule } from './routes/admin/admin-endpoint.module';
import { TestingEndpointModule } from './routes/testing/testing-endpoint.module';

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
        path: 'testing',
        module: TestingEndpointModule,
      },
    ]),
    AdminEndpointModule,
    TestingEndpointModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
