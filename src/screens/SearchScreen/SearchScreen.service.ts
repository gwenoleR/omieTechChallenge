/**
 *
 * Determines if a product name contains the search string.  Case and accent insensitive.
 *
 * @param elementToCheck String
 * @param searchString String
 * @returns True if search string is in the element
 *
 * Example: containsSearchString('Huile de coco', 'huile coco') -> true
 */
export const containsSearchString = (
  elementToCheck: string,
  searchString: string,
): boolean => {
  // RegExp pattern : ^(?=.*\bword1\b)(?=.*\bword2\b).*$
  const regExp = new RegExp(
    searchString
      .split(' ')
      .map(word => `(?=.*${word.removeDiacritics()}.*)`)
      .join(''),
    'gi',
  );
  return regExp.test(elementToCheck.removeDiacritics());
};

/**
 *
 * Returns all products matching the input string.  Case and accent insensitive.
 *
 * @param searchString String
 * @param products String[]
 * @returns String[]
 */
export const findMatchingProduct = (
  searchString: string,
  products: string[],
): string[] => {
  return products.filter((productName: string) =>
    containsSearchString(productName, searchString),
  );
};
