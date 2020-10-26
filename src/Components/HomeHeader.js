import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Camera, Send, Instagram} from './icons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <Camera stroke="black" />
      </View>
      <View style={styles.instagram}>
        <Instagram width={120} height={30} />
      </View>
      <View style={styles.send}>
        <Send stroke="black" />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  instagram: {
    height: 30,
    paddingBottom: 20,
  },
  camera: {
    position: 'absolute',
    left: 5,
  },
  send: {
    position: 'absolute',
    right: 5,
  },
});
