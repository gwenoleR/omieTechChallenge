/**
 * @format
 */

import React from 'react';
import 'react-native';
import { render } from 'react-native-testing-library';
import App from '../App';

it('renders correctly', () => {
  let getByTestId;
  ({ getByTestId } = render(<App />));

  expect(getByTestId('appContainer')).toBeDefined();
});
