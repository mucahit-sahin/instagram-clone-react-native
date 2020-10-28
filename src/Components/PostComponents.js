import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Bookmark, Comment, Heart, More, Send} from './icons';

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
      <View style={styles.postOptions}>
        <Heart stroke="black" />
        <Comment stroke="black" style={{marginLeft: 5}} />
        <Send stroke="black" style={{marginLeft: 5}} />
        <Bookmark stroke="black" style={styles.bookmark} />
      </View>
      <View style={styles.postDescription}>
        <Text style={styles.username}>KullanıcıAdı</Text>
        <Text style={styles.text}> blablablabalbalballballbalbla</Text>
      </View>
      <View style={styles.postComments}>
        <View style={styles.postComment}>
          <Text style={styles.text}>
            <Text style={styles.username}>KullanıcıAdı</Text>
            yorumyorumyorumyorumyorumyorumyorumyorumyorumyorumyorum
          </Text>
        </View>
        <View style={styles.postComment}>
          <Text style={styles.text}>
            <Text style={styles.username}>KullanıcıAdı</Text>
            yorumyorumyorumyorumyorumyorumyorumyorumyorumyorumyorum
          </Text>
        </View>
      </View>
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
  username: {paddingLeft: 10, fontWeight: 'bold'},
  more: {position: 'absolute', right: 10},
  postImage: {width: width, height: width, backgroundColor: 'aqua'},
  postOptions: {flexDirection: 'row', marginLeft: 5},
  bookmark: {position: 'absolute', right: 10},
  postDescription: {flexDirection: 'row'},
  postComments: {
    width: width - 20,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  postComment: {flexDirection: 'row'},
});
