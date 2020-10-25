import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../Components/Button';

import Instagram from '../Components/icons/Instagram';

const width = Dimensions.get('window').width;

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Instagram />
      </View>
      <View>
        <TextInput style={styles.text} placeholder="Email" />
        <TextInput style={styles.text} placeholder="Display Name" />
        <TextInput style={styles.text} placeholder="Username" />
        <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.signup}>
          <Button text="Sign up" />
        </View>
      </View>
      <View style={styles.login}>
        <Text>
          Have an account?
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  text: {
    width: width - 40,
    marginTop: 10,
    backgroundColor: '#fafafa',
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    borderRadius: 10,
  },
  signup: {
    width: width - 40,
    marginTop: 10,
  },
  login: {
    marginTop: 50,
  },
  loginText: {
    color: 'blue',
  },
});
