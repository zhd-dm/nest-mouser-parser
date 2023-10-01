/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Search parts by keyword and return a maximum of 50 parts.
 */
export type SearchByKeywordRequest = {
  /**
   * Used for keyword part search.
   */
  keyword: string;
  /**
   * Used to specify how many records the method should return.
   */
  records?: number;
  /**
   * Indicates where in the total recordset the return set should begin. From the startingRecord, the number of records specified will be returned up to the end of the recordset. This is useful for paging through the complete recordset of parts matching keyword.
   */
  startingRecord?: number;
  /**
   * Optional.  If not provided, the default is None.  Refers to options supported by the search engine.  Only one value at a time is supported. Available options:  None | Rohs | InStock | RohsAndInStock - can use string representations or integer IDs: 1[None] | 2[Rohs] | 4[InStock] | 8[RohsAndInStock].
   */
  searchOptions?: string;
  /**
   * Optional. If not provided, the default is false.  Used when searching for keywords in the language specified when you signed up for Search API. Can use string representation: true.
   */
  searchWithYourSignUpLanguage?: string;
};
