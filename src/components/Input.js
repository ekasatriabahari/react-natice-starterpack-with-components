import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

const Inputs = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
      <View>
        <Icon name={iconName} size={30} color="#10ac84" style={styles.icon} />
      </View>
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: {
    height: 45,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2c2c54',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
  },
  icon: {
    margin: 6,
  },
});
