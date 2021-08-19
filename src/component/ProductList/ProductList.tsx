import React from 'react';
import { FlatList, Text, View, ViewStyle } from 'react-native';
import { ProductListProps } from './ProductListProps';

const ITEM: ViewStyle = {
  padding: 8,
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
  testID,
}) => {
  return (
    <FlatList
      testID={testID}
      data={products}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <View style={ITEM}>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};
