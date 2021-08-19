import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import './extensions';
import { SearchScreen } from './src/screens/SearchScreen/SearchScreen';

const App = () => {
  return (
    <SafeAreaView testID="appContainer">
      <StatusBar />
      <SearchScreen />
    </SafeAreaView>
  );
};

export default App;
