import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import HomeHeader from '../Components/HomeHeader';
import Post from '../Components/Post';

const Home = () => {
  return (
    <View as={SafeAreaView} style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
});
