import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from "../hotelmanagement/Screens/HomeScreen"
// import Booking from "../hotelmanagement/Screens/Booking"
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import ContactUs from './Screens/Contactus';
// import Profile from './Screens/Profile';
import SignUp from './Screens/Signup';
import BookNow from './Screens/BookNow';
import { MainScreen } from "../hotelmanagement/Screens/MainScreen"


const Appnavigation = () => {
  // const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <>

      {/* <NavigationContainer>
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
          </NavigationContainer> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="BookNow" component={BookNow} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Appnavigation