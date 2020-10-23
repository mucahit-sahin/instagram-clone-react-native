import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Splashscreen from './Screens/Splashscreen';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Splashscreen />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
