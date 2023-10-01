/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Search parts by part number and return a maximum of 50 parts.
 */
export type SearchByPartRequest = {
  /**
   * Used to search parts by the specific Mouser part number with a maximum input of 10 part numbers, separated by a pipe symbol for the search. Each part number must be a minimum of 3 characters and a maximum of 40 characters. For example: 494-JANTX2N2222A|610-2N2222-TL|637-2N2222A
   */
  mouserPartNumber?: string;
  /**
   * Optional.  If not provided, the default is None.  Refers to options supported by the search engine. Only one value at a time is supported.
 * The following values are valid: None | Exact - can use string representations or integer IDs: 1[None] | 2[Exact]
   */
  partSearchOptions?: string;
};
