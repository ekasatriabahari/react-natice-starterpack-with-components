import React from 'react';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonSocMed = ({imageSrc, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={imageSrc} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#2c2c54',
    borderWidth: 1,
    flex: 1,
    height: 40,
    width: 40,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default ButtonSocMed;
