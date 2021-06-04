import React from 'react';
/* React Navigation */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

/* App Navigation */
import AppNav from './src/appNav';

import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
