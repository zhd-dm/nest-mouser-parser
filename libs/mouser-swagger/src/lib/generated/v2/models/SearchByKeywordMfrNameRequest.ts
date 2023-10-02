/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Search parts by keyword and specific manufacturer. Return a maximum of 50 parts.
 */
export type SearchByKeywordMfrNameRequest = {
  /**
   * Used for filtering by a specific manufacturer. Please get the manufacturerName from the GetManufacturerList method.
   */
  manufacturerName?: string;
  /**
   * Used for keyword part search.
   */
  keyword: string;
  /**
   * Used to specify how many records the method should return.
   */
  records?: number;
  /**
   * Indicates which page of the total recordset the method should return. The page number is based off of the number of records specified in the records parameter. For the pageNumber, the number of records specified will be returned up to the end of the recordset. This is useful for paging through the complete recordset of parts matching keyword.
   */
  pageNumber?: number;
  /**
   * Optional.  If not provided, the default is None.  Refers to options supported by the search engine.  Only one value at a time is supported. Available options:  None | Rohs | InStock | RohsAndInStock - can use string representations or integer IDs: 1[None] | 2[Rohs] | 4[InStock] | 8[RohsAndInStock].
   */
  searchOptions?: string;
  /**
   * Optional. If not provided, the default is false.  Used when searching for keywords in the language specified when you signed up for Search API. Can use string representation: true.
   */
  searchWithYourSignUpLanguage?: string;
};
