/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderAddress } from './OrderAddress';

export type PaymentTypeRequest = {
  Method: number;
  /**
   * Optional. For RMB orders only. If not provided, the billing address associated with the account will be used if there is not a VAT Invoice Address already on the account.
   */
  VatInvoiceAddress?: OrderAddress;
  CreditCardLastFourDigits?: number;
  VatAccountNumber?: string;
  TaxCertificateKey?: string;
  TaxStatus?: PaymentTypeRequest.TaxStatus;
  PoNumber?: string;
  /**
   * Required only for RMB orders
   */
  VatInvoiceType?: PaymentTypeRequest.VatInvoiceType;
  BankName?: string;
  BankAccountNumber?: string;
  /**
   * Required only if shipping to Mexico. Do you have an RFC Number?
   */
  UseRfcNumber?: boolean;
  /**
   * Is this number valid for EU intra-Community shipments?
   */
  VatNumberValidForEuShipments?: boolean;
};

export namespace PaymentTypeRequest {

  export enum TaxStatus {
    NONE = 'None',
    TAXABLE = 'Taxable',
    NON_TAXABLE = 'NonTaxable',
  }

  /**
   * Required only for RMB orders
   */
  export enum VatInvoiceType {
    NONE = 'None',
    GENERAL_WITHOUT_TX_ID = 'GeneralWithoutTxID',
    GENERAL = 'General',
    VAT = 'Vat',
  }


}
