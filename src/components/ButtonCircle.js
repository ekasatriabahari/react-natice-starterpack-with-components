import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

const ButtonCircle = ({iconName, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          android={'ios-' + iconName}
          ios={'ios-' + iconName}
          style={styles.icon}
        />
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
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#2c2c54',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ButtonCircle;
