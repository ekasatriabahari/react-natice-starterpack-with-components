import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonBorderless = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}> {label} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 45,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2c2c54',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
});

export default ButtonBorderless;
