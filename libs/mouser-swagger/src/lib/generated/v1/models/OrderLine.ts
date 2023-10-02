/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorEntity } from './ErrorEntity';
import type { ScheduleRelease } from './ScheduleRelease';

export type OrderLine = {
  Errors?: Array<ErrorEntity>;
  MouserATS?: number;
  Quantity?: number;
  PartsPerReel?: number;
  ScheduledReleases?: Array<ScheduleRelease>;
  InfoMessages?: Array<string>;
  MouserPartNumber?: string;
  MfrPartNumber?: string;
  Description?: string;
  CartItemCustPartNumber?: string;
  UnitPrice?: number;
  ExtendedPrice?: number;
  LifeCycle?: string;
  Manufacturer?: string;
  SalesMultipleQty?: number;
  SalesMinimumOrderQty?: number;
  SalesMaximumOrderQty?: number;
};
