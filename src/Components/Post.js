import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PostHeader, PostContent} from './PostComponents';

const Post = () => {
  return (
    <View>
      <PostHeader />
      <PostContent />
    </View>
  );
};

export default Post;
