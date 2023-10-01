/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorEntity } from './ErrorEntity';
import type { OrderAddressType } from './OrderAddressType';
import type { PaymentRoot } from './PaymentRoot';
import type { PreferredLanguage } from './PreferredLanguage';
import type { ShippingRoot } from './ShippingRoot';

export type OrderInitializeResponse = {
  CurrencyCode?: string;
  BillingAddress?: OrderAddressType;
  ShippingAddress?: OrderAddressType;
  Shipping?: ShippingRoot;
  IECCode?: string;
  Payment?: PaymentRoot;
  Languages?: Array<PreferredLanguage>;
  Errors?: Array<ErrorEntity>;
};
