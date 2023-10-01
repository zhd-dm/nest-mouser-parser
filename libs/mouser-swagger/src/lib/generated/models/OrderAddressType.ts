/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiError } from './ApiError';

export type OrderAddressType = {
  Error?: ApiError;
  AddressLocationTypeID?: OrderAddressType.AddressLocationTypeID;
  CountryCode: string;
  FirstName: string;
  LastName: string;
  AttentionLine?: string;
  Company?: string;
  AddressOne: string;
  AddressTwo?: string;
  City: string;
  /**
   * Required for certain countries.
   */
  StateOrProvince?: string;
  /**
   * Required for certain countries. Max length is dependent upon country. China for example has a max length of 6. Default max length is 10.
   */
  PostalCode?: string;
  PhoneNumber: string;
  PhoneExtension?: string;
  /**
   * Only required for billing addresses
   */
  EmailAddress?: string;
};

export namespace OrderAddressType {

  export enum AddressLocationTypeID {
    RESIDENTIAL = 'Residential',
    COMMERCIAL = 'Commercial',
    POST_OFFICE_BOX = 'PostOfficeBox',
    APOFPO = 'APOFPO',
  }


}
