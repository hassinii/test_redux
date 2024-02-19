import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from '../BottomTabs/BottomTabs';
import Home from '../Home/Home';
import Profil from '../Profil/Profil';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='BottomTabs'>
    <Drawer.Screen name="Dashboard" component={BottomTabs} />
    <Drawer.Screen name="Profil" component={Profil} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation