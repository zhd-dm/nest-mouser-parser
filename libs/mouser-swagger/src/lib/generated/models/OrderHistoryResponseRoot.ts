/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorEntity } from './ErrorEntity';
import type { OrderHistoryBaseObject } from './OrderHistoryBaseObject';

export type OrderHistoryResponseRoot = {
  Errors?: Array<ErrorEntity>;
  NumberOfOrders?: number;
  OrderHistoryItems?: Array<OrderHistoryBaseObject>;
};
