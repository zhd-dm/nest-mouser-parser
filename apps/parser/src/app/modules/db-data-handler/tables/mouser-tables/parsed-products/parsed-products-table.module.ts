import { Module } from '@nestjs/common';

import { ParsedProductsTableService } from './parsed-products-table.service';

@Module({
  providers: [ParsedProductsTableService]
})
export class ParsedProductsTableModule {}
