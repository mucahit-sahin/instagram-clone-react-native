import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {More} from './icons';

const width = Dimensions.get('window').width;

export function PostHeader({userimage, username}) {
  return (
    <View style={styles.header}>
      <View style={styles.userimage}></View>
      <Text style={styles.username}>kulllanıcı adı</Text>
      <More stroke="black" style={styles.more} />
    </View>
  );
}
export function PostContent() {
  return (
    <View style={styles.content}>
      <View style={styles.postImage}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {flexDirection: 'row', alignItems: 'center'},
  userimage: {
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 5,
  },
  username: {paddingLeft: 20, fontWeight: 'bold'},
  more: {position: 'absolute', right: 10},
  postImage: {width: width, height: width, backgroundColor: 'aqua'},
});
