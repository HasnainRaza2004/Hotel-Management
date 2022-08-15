import Booking from "./Booking"
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactUs from './Contactus';
import Profile from './Profile';
import React from 'react'
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import BookNow from "./BookNow";

export


const MainScreen = () => {
    const Tab = createBottomTabNavigator();
  return (
    <>
    <Tab.Navigator 
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'auto-stories' : 'auto-stories';
          }

          if (route.name === 'Contact Us') {
            iconName = focused
              ? 'contacts'
              : 'contacts';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Booking" component={Booking} />
        <Tab.Screen name="Contact Us" component={ContactUs} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  )
}
