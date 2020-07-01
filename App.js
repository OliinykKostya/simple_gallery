import React from 'react';
import MyTabs from './src/routes/tabs';
import { StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export const App = () => {
  RNBootSplash.hide();
  return (
    <>
      <MyTabs />

      <StatusBar
        barStyle="light-content"
        backgroundColor="#4F6D7A"
      />

    </>
  )
}


export default App;
