/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorEntity } from './ErrorEntity';
import type { OrderAddressType } from './OrderAddressType';
import type { OrderLine } from './OrderLine';
import type { OrderPayment } from './OrderPayment';
import type { OrderShipping } from './OrderShipping';

export type Order = {
  OrderLines?: Array<OrderLine>;
  CurrencyCode?: string;
  MerchandiseTotal?: number;
  OrderTotal?: number;
  OrderType?: string;
  CartGUID?: string;
  BillingAddress?: OrderAddressType;
  ShippingAddress?: OrderAddressType;
  ShippingMethod?: OrderShipping;
  PaymentMethod?: OrderPayment;
  TaxAmount?: number;
  OrderID?: string;
  TaxCertificateId?: string;
  IECCode?: string;
  LanguageCode?: string;
  Errors?: Array<ErrorEntity>;
  SubmitOrder?: boolean;
};
