import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Accounts, Menu} from '../Components/icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>username</Text>
        </View>
        <Accounts />
        <View style={styles.headerMenu}>
          <Menu />
        </View>
      </View>
      <View style={styles.profileBiyografi}>
        <View style={styles.profileImage}></View>
        <View style={styles.postsizes}>
          <Text style={styles.size}>15</Text>
          <Text style={styles.sizename}>Posts</Text>
        </View>
        <View style={styles.postsizes}>
          <Text style={styles.size}>105</Text>
          <Text style={styles.sizename}>Follows</Text>
        </View>
        <View style={styles.postsizes}>
          <Text style={styles.size}>121</Text>
          <Text style={styles.sizename}>Followers</Text>
        </View>
      </View>
      <View style={styles.biyografiText}>
        <Text style={styles.displayName}>Display Name</Text>
        <Text>Biyografi</Text>
      </View>
      <View style={styles.editProfileButton}>
        <Text>Edit Profile</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: width,
    height: height,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextView: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  headerMenu: {position: 'absolute', right: 20},
  profileBiyografi: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: 'red',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 30,
  },
  postsizes: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
    flex: 0.33,
  },
  size: {fontWeight: 'bold'},
  sizename: {color: 'gray'},
  biyografiText: {marginLeft: 20, marginTop: 20},
  displayName: {fontWeight: 'bold'},
  editProfileButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
