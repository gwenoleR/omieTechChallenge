import React from 'react';
import { Text } from 'react-native';
import { SearchBar } from '../component/SearchBar/SearchBar';

export const SearchScreen: React.FC = () => {
  const [searchString, setSearchString] = React.useState<string>('');

  React.useEffect(() => {
    // Do smth with the searchString
    console.log(searchString);
  }, [searchString]);

  return (
    <>
      <SearchBar onTextChange={setSearchString} />
      {!searchString && <Text testID="emptyMessage">No product found.</Text>}
      {!!searchString && <Text testID="productList">Found result</Text>}
    </>
  );
};
