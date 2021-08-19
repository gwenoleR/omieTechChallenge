import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SearchScreen } from './src/screens/SearchScreen';

const App = () => {
  return (
    <SafeAreaView testID="appContainer">
      <StatusBar />
      <SearchScreen />
    </SafeAreaView>
  );
};

export default App;
