import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../../../../core/prisma/prisma.service';
import { catchAndThrowException } from '../../../../../core/utils';

@Injectable()
export class ParsedProductsTableService {
  constructor(private readonly prismaService: PrismaService) {}

  create(product: Prisma.ParsedProductsCreateInput) {
    return from(this.prismaService.parsedProducts.create({ data: product })).pipe(catchAndThrowException());
  }

  createMany(products: Prisma.ParsedProductsCreateInput[]) {
    return from(this.prismaService.parsedProducts.createMany({ data: products })).pipe(catchAndThrowException())
  }
}
