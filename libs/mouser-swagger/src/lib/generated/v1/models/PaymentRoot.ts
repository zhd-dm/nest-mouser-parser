/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentType } from './PaymentType';
import type { TaxCertificates } from './TaxCertificates';
import type { VatAccount } from './VatAccount';

export type PaymentRoot = {
  PaymentTypes?: Array<PaymentType>;
  TaxCertificates?: Array<TaxCertificates>;
  VatAccounts?: Array<string>;
  VatAccountDetails?: Array<VatAccount>;
};
