import React from 'react';
import { render } from 'react-native-testing-library';
import { ProductList } from './ProductList';

describe('ProductList', () => {
  describe('clicking reset button', () => {
    const productListMock = [
      'Huile de coco',
      'Huile de sésame',
      'Café moulu',
      'Café grain fort',
    ];
    const testID = 'productListComponent';

    let getByTestId;

    beforeEach(() => {
      ({ getByTestId } = render(
        <ProductList products={productListMock} testID={testID} />,
      ));
    });

    it('show a list of products', () => {
      expect(getByTestId(testID).props.data.length).toEqual(4);
    });
  });
});
