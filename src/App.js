import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import BottomNavigation from './Screens/BottomNavigation';
import Home from './Screens/Home';

import SignPanel from './Screens/SignPanel';
import Splashscreen from './Screens/Splashscreen';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Splashscreen /> */}
      {/* <SignPanel /> */}
      <BottomNavigation />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
