import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeHeader from '../Components/HomeHeader';
import Post from '../Components/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Post />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
