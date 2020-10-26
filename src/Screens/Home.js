import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeHeader from '../Components/HomeHeader';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
  },
});
