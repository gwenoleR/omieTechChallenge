import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { SearchBarProps } from './SearchBarProps';

const ROW: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(1,1,1,0.1)',
  borderRadius: 10,
  marginVertical: 8,
};

const INPUT: ViewStyle = {
  flex: 1,
  padding: 8,
};

const RESET_BUTTON: ViewStyle = {
  paddingVertical: 8,
  paddingHorizontal: 16,
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
        style={INPUT}
        ref={searchBarRef}
        testID="searchBar"
        onChangeText={onTextChange}
      />
      <TouchableOpacity
        onPress={handleResetSearch}
        testID="resetSearchButton"
        style={RESET_BUTTON}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};
