import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  describe('clicking reset button', () => {
    const searchText = 'huile';

    let changeHandler;
    let getByTestId;

    beforeEach(() => {
      changeHandler = jest.fn();
      ({ getByTestId } = render(<SearchBar onTextChange={changeHandler} />));

      fireEvent.changeText(getByTestId('searchBar'), searchText);
      fireEvent.press(getByTestId('resetSearchButton'));
    });

    it('clears the search field', () => {
      expect(getByTestId('searchBar').props.value).toBeFalsy();
      expect(changeHandler).toHaveBeenCalledWith('');
    });

    it('calls the change handler', () => {
      expect(changeHandler).toHaveBeenCalledWith(searchText);
    });
  });
});
