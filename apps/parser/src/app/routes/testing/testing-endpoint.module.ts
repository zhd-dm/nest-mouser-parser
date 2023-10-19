import { Module } from '@nestjs/common';

import { TestingEndpointController } from './testing-endpoint.controller';
import {
  AppAccountTableModule
} from '../../modules/db-data-handler/tables/application-configuration-tables/app-account/app-account-table.module';

@Module({
  imports: [AppAccountTableModule],
  controllers: [TestingEndpointController]
})
export class TestingEndpointModule {}
