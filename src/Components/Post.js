import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PostHeader, PostContent} from './PostComponents';

const Post = () => {
  return (
    <View style={{marginBottom: 10}}>
      <PostHeader />
      <PostContent />
    </View>
  );
};

export default Post;
