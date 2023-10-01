/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlternatePackaging } from './AlternatePackaging';
import type { AvailabilityOnOrderObject } from './AvailabilityOnOrderObject';
import type { Pricebreak } from './Pricebreak';
import type { ProductAttribute } from './ProductAttribute';
import type { ProductCompliance } from './ProductCompliance';
import type { StandardCost } from './StandardCost';
import type { UnitWeightKg } from './UnitWeightKg';

export type MouserPart = {
  Availability?: string;
  DataSheetUrl?: string;
  Description?: string;
  FactoryStock?: string;
  ImagePath?: string;
  Category?: string;
  LeadTime?: string;
  LifecycleStatus?: string;
  Manufacturer?: string;
  ManufacturerPartNumber?: string;
  Min?: string;
  Mult?: string;
  MouserPartNumber?: string;
  ProductAttributes?: Array<ProductAttribute>;
  PriceBreaks?: Array<Pricebreak>;
  AlternatePackagings?: Array<AlternatePackaging>;
  ProductDetailUrl?: string;
  Reeling?: boolean;
  ROHSStatus?: string;
  SuggestedReplacement?: string;
  MultiSimBlue?: number;
  UnitWeightKg?: UnitWeightKg;
  StandardCost?: StandardCost;
  IsDiscontinued?: string;
  RTM?: string;
  MouserProductCategory?: string;
  IPCCode?: string;
  SField?: string;
  VNum?: string;
  ActualMfrName?: string;
  AvailableOnOrder?: string;
  AvailabilityInStock?: string;
  readonly AvailabilityOnOrder?: Array<AvailabilityOnOrderObject>;
  InfoMessages?: Array<string>;
  SalesMaximumOrderQty?: string;
  RestrictionMessage?: string;
  PID?: string;
  ProductCompliance?: Array<ProductCompliance>;
};
