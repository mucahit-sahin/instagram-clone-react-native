import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const width = Dimensions.get('window').width;

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStil}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3797EF',
    borderRadius: 10,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStil: {
    color: 'white',
  },
});
