import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Login from './Screens/Login';
import Splashscreen from './Screens/Splashscreen';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Splashscreen /> */}
      <Login />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
