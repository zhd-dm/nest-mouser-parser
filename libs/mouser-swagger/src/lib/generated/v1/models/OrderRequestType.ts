/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FreightAccount } from './FreightAccount';
import type { OrderAddress } from './OrderAddress';
import type { PaymentTypeRequest } from './PaymentTypeRequest';
import type { ShippingMethod } from './ShippingMethod';

/**
 * The billing address associated with this account will be used.
 * Shipping Address is optional. If a shipping address is not provided, the default shipping address associated with this account will be used.
 */
export type OrderRequestType = {
  ShippingAddress?: OrderAddress;
  OrderType?: OrderRequestType.OrderType;
  PrimaryShipping?: ShippingMethod;
  SecondaryShipping?: ShippingMethod;
  IECCode?: string;
  PrimaryFreightAccount?: FreightAccount;
  SecondaryFreightAccount?: FreightAccount;
  Payment?: PaymentTypeRequest;
  CurrencyCode: string;
  CartKey: string;
  LanguageCode?: string;
  SubmitOrder?: boolean;
};

export namespace OrderRequestType {

  export enum OrderType {
    UNSPECIFIED = 'Unspecified',
    RUSH = 'Rush',
    COMPLETE = 'Complete',
  }


}
