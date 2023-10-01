/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorEntity } from './ErrorEntity';
import type { OrderLine } from './OrderLine';

export type CartResponseRoot = {
  Errors?: Array<ErrorEntity>;
  CartKey?: string;
  CurrencyCode?: string;
  CartItems?: Array<OrderLine>;
  TotalItemCount?: number;
  MerchandiseTotal?: number;
};
