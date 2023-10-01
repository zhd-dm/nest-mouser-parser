/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiError } from './ApiError';
import type { OrderAddressType } from './OrderAddressType';

export type OrderPayment = {
  Error?: ApiError;
  PONumber?: string;
  Method?: number;
  Name?: string;
  VatAccountNumber?: string;
  VatInvoiceAddress?: OrderAddressType;
};
