import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { ProductList } from '../../component/ProductList/ProductList';
import { SearchBar } from '../../component/SearchBar/SearchBar';
import omieProducts from '../../data/omie_products.json';
import { findMatchingProduct } from './SearchScreen.service';

const CONTAINER: ViewStyle = {
  marginHorizontal: 16,
};

export const SearchScreen: React.FC = () => {
  const [searchString, setSearchString] = React.useState<string>('');
  const [searchResult, setSearchResult] = React.useState<string[]>([]);
  const [products, setProducts] = React.useState<string[]>([]);

  React.useEffect(() => {
    // Get products from smwh, api/local..
    setProducts(
      omieProducts.data.allProductReference.map(
        product => product.display_name,
      ),
    );
  }, []);

  React.useEffect(() => {
    // Do smth with the searchString
    setSearchResult(findMatchingProduct(searchString, products));
  }, [products, searchString]);

  return (
    <View style={CONTAINER}>
      <SearchBar onTextChange={setSearchString} />
      {!searchString && <Text testID="emptyMessage">No product found.</Text>}
      {!!searchString && products.length > 0 && (
        <ProductList testID="productList" products={searchResult} />
      )}
    </View>
  );
};
