import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

const Card = ({iconName, title, subTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon android="ios-cart" ios="ios-cart" style={styles.icon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Icon
        android="ios-arrow-dropright"
        ios="ios-arrow-dropright"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2c2c54',
    borderWidth: 1,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 25,
  },
  title: {
    color: '#2c2c54',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  subTitle: {
    color: '#2c2c54',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  icon: {
    color: '#2c2c54',
  },
});
