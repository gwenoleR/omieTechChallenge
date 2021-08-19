import React from 'react';
import { FlatList, Text } from 'react-native';
import { ProductListProps } from './ProductListProps';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  testID,
}) => {
  return (
    <FlatList
      testID={testID}
      data={products}
      keyExtractor={item => item}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};
