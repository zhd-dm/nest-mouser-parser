/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderAddress } from './OrderAddress';

/**
 * The billing address associated with this account will be used.
 * Shipping Address is optional. If a shipping address is not provided, the default shipping address associated with this account will be used.
 */
export type OrderInitializeRequest = {
  /**
   * Comments here won't show up in swagger docs UI page for some reason
   */
  ShippingAddress?: OrderAddress;
  /**
   * Optional. If not provided, the default currency code based on the billing/shipping address associated with the account will be used to determine currency code.
   */
  CurrencyCode?: string;
  /**
   * Optional. However, if a cart key is provided, more accurate shipping methods will be returned, plus shipping rates.
   */
  CartKey?: string;
};
