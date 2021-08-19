const {
  containsSearchString,
  findMatchingProduct,
} = require('./SearchScreen.service');
import '../../../extensions';
import omieProducts from '../../data/omie_products.json';

describe('SearchScreen', () => {
  describe('SearchScreenService', () => {
    describe('containsSearchString method', () => {
      it("Should return true when search 'huile coco' in 'Huile de coco'", async () => {
        expect(
          containsSearchString('Huile de coco', 'huile coco'),
        ).toBeTruthy();
      });

      it("Should return true when search 'cafe' in 'Café en grain'", async () => {
        expect(containsSearchString('Café en grain', 'cafe')).toBeTruthy();
      });

      it("Should return true when search 'caf' in 'Café en grain'", async () => {
        expect(containsSearchString('Café en grain', 'caf')).toBeTruthy();
      });

      it("Should return true when search 'af' in 'Café en grain'", async () => {
        expect(containsSearchString('Café en grain', 'af')).toBeTruthy();
      });

      it("Should return false when search 'huile coco' in 'Café'", async () => {
        expect(containsSearchString('Café', 'huile coco')).toBeFalsy();
      });
    });

    describe('findMatchingProduct method', () => {
      const omieProductsList = omieProducts.data.allProductReference.map(
        product => product.display_name,
      );
      it('Should return only one result', () => {
        const result = findMatchingProduct('huile coco', omieProductsList);
        expect(result.length).toEqual(1);
        expect(result[0]).toBe('Huile de coco vierge du Sri Lanka');
      });

      it('Should return only one result even with reversed word', () => {
        const result = findMatchingProduct('coco huile', omieProductsList);
        expect(result.length).toEqual(1);
        expect(result[0]).toBe('Huile de coco vierge du Sri Lanka');
      });

      it('Should return mulitple results', () => {
        const result = findMatchingProduct('cafe', omieProductsList);
        expect(result.length).toBeGreaterThan(1);
        result.map(r => {
          expect(containsSearchString(r, 'cafe')).toBeTruthy();
        });
      });

      it('Should return mulitple results even only with the start of the word', () => {
        const result = findMatchingProduct('caf', omieProductsList);
        expect(result.length).toBeGreaterThan(1);
        result.map(r => {
          expect(containsSearchString(r, 'caf')).toBeTruthy();
        });
      });

      it('Should return mulitple results even only with the end of the word', () => {
        const result = findMatchingProduct('anka', omieProductsList);
        expect(result.length).toBeGreaterThan(1);
        result.map(r => {
          expect(containsSearchString(r, 'anka')).toBeTruthy();
        });
      });

      it('Should return no result', () => {
        const result = findMatchingProduct('hello', omieProductsList);
        expect(result.length).toEqual(0);
      });
    });
  });
});
