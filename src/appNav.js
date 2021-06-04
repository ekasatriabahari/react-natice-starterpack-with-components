import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from 'react-native';

/* Icon */
import Icon from 'react-native-ionicons';

/* React Navigation */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

/* import components */
import Input from './components/Input';
import Button from './components/Button';
import ButtonOutline from './components/ButtonOutline';
import ButtonBorderless from './components/ButtonBorderless';
import ButtonCircle from './components/ButtonCircle';
import CardOrder from './components/CardOrder';
import CardMenu from './components/CardMenu';
import Tag from './components/Tag';
import TagOutline from './components/TagOutline';

/* import screens */
import HomeScreen from './screens/home/index';
import Notif from './screens/notif/index';

import 'react-native-gesture-handler';
import ButtonIcon from './components/ButtonIcon';
import ButtonSocMed from './components/ButtonSocMed';

/* Import IMAGE SOCMED PNG */
import YOUTUBE from './assets/icons/002-youtube.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Tes = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Input placeholder="tes" iconName="search" />
        <Input />
        <Button label="Proses" />
        <ButtonOutline label="Proses" />
        <ButtonBorderless label="Proses" />
        <ButtonCircle iconName="refresh" />
        <ButtonIcon iconName="settings" />
        <ButtonSocMed imageSrc={YOUTUBE} />
        <CardOrder title="Table 1" subTitle="Mie Setan" />
        <CardMenu title="Mie Setan" price={10000} />
        <Tag label="Makanan" />
        <TagOutline label="Minuman" />
      </ScrollView>
    </SafeAreaView>
  );
};

const ToggleBar = navigation => {
  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Icon android="ios-menu" ios="ios-menu" />
  </TouchableOpacity>;
};

const NotifStack = () => {
  return (
    <Stack.Navigator initialRouteName="Notifikasi">
      <Stack.Screen
        name="Notifikasi"
        component={Notif}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon android="ios-menu" ios="ios-menu" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tes">
      <Stack.Screen
        name="Tes"
        component={Tes}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon android="ios-menu" ios="ios-menu" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const appNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Tes" component={TesStack} />
      <Drawer.Screen name="Notifikasi" component={NotifStack} />
    </Drawer.Navigator>
  );
};

export default appNav;
