import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Instagram from '../Components/icons/Instagram';
import Button from '../Components/Button';

const width = Dimensions.get('window').width;

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Instagram />
      </View>
      <View>
        <TextInput style={styles.text} placeholder="Username" />
        <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.forget}>
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <Button text="Login" />
      </View>
      <View style={styles.sign}>
        <Text>
          Dou you have an account?
          <TouchableOpacity>
            <Text style={styles.signText}>Sign up.</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
  login: {
    width: width - 40,
    marginTop: 10,
  },
  forget: {
    marginTop: 20,
    width: width - 40,
  },
  forgetText: {
    color: 'gray',
    textAlign: 'right',
  },
  sign: {
    marginTop: 50,
  },
  signText: {
    color: 'blue',
  },
});
