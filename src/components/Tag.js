import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tag = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c54',
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
export default Tag;
