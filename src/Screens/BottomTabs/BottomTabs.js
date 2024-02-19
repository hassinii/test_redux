import { View, Text } from 'react-native'
import React from 'react'
 import Home from '../Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profil from '../Profil/Profil';
import Logout from '../Logout/Logout';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false,
      }}
   >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="simptote"
        component={Profil}
        options={{
          tabBarLabel: 'simptote',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="powershell" color={color} size={size} />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarLabel: 'Logout ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs