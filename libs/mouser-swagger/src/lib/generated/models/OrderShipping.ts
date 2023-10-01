/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiError } from './ApiError';

export type OrderShipping = {
  Error?: ApiError;
  PrimaryCode?: number;
  SecondaryCode?: number;
  PrimaryMethod?: string;
  SecondaryMethod?: string;
  PrimaryShippingRate?: number;
  SecondaryShippingRate?: number;
  PrimaryFreightCollectAccount?: string;
  SecondaryFreightCollectAccount?: string;
};
