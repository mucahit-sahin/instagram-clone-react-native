import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Accounts, Menu} from '../Components/icons';

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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
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
  headerMenu: {position: 'absolute', right: 10},
});
