import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Initiation from './screens/Start';
import Home from './screens/Home'
import Itinerary from './screens/Itinerary'
import Register from './screens/Register'
import SigIn from './screens/SignIn'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="initial" component={Initiation}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='Itinerary' component={Itinerary} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='SignIn' component={SigIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Nav