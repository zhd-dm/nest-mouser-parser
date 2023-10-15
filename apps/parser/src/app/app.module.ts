import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MouserEndpointsModule } from './modules/mouser-endpoints/mouser-endpoints.module';
import { AdminEndpointModule } from './routes/admin/admin-endpoint.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
    RouterModule.register([
      {
        path: 'mouser-endpoints',
        module: MouserEndpointsModule,
      },
      {
        path: 'admin',
        module: AdminEndpointModule,
      },
    ]),
    MouserEndpointsModule,
    AdminEndpointModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
