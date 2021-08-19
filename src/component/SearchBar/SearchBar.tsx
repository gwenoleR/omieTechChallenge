import React from 'react';
import { Button, TextInput, View, ViewStyle } from 'react-native';
import { SearchBarProps } from './SearchBarProps';

const ROW: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const SearchBar: React.FC<SearchBarProps> = ({ onTextChange }) => {
  const searchBarRef = React.useRef<TextInput>(null);

  const handleResetSearch = () => {
    searchBarRef.current?.setNativeProps({ text: '' });
    onTextChange('');
  };

  return (
    <View style={ROW}>
      <TextInput
        ref={searchBarRef}
        testID="searchBar"
        onChangeText={onTextChange}
      />
      <Button
        title="x"
        onPress={handleResetSearch}
        testID="resetSearchButton"
      />
    </View>
  );
};
