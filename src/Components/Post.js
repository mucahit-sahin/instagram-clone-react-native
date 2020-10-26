import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Post = () => {
  return (
    <View>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.userimage}></View>
        <Text style={styles.username}>kulllanıcı adı</Text>
      </View>
    </View>
  );
};

export default Post;

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
});
