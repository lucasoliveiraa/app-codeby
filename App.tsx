import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import {Home} from './src/screen/Home';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </NavigationContainer>
  );
}
