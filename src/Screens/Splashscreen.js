import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InstaLogo from '../Components/icons/Logo';

const Splashscreen = () => {
  return (
    <View style={styles.logoView}>
      <InstaLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splashscreen;
