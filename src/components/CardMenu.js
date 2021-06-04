import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import NOIMAGE from '../assets/images/noimage.png';

const CardMenu = ({image, title, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Image source={NOIMAGE} style={styles.img} />
        <View style={{backgroundColor: '#2c2c54'}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2c2c54',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={styles.price}>Rp. {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2c2c54',
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    resizeMode: 'cover',
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    fontSize: 14,
    marginHorizontal: 10,
  },
  price: {
    fontFamily: 'Montserrat-Regular',
    color: '#ffffff',
    fontSize: 12,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
