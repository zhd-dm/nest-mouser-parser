/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiError } from './ApiError';
import type { FreightAccount } from './FreightAccount';
import type { ShippingMethodType } from './ShippingMethodType';

export type ShippingRoot = {
  Methods?: Array<ShippingMethodType>;
  FreightAccounts?: Array<FreightAccount>;
  Error?: ApiError;
};
