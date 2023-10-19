import { Module } from '@nestjs/common';

import { AppAccountTableModule } from '../../modules/db-data-handler/tables/application-configuration-tables/app-account/app-account-table.module';
import { AppAccountEndpointController } from './app-account/app-account-endpoint.controller';

@Module({
  imports: [
    // app-account
    AppAccountTableModule,
  ],
  controllers: [AppAccountEndpointController],
})
export class AdminEndpointModule {}
