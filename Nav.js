import 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { connect } from "react-redux"
import Initiation from './screens/Start';
import Home from './screens/Home'
import Itinerary from './screens/Itinerary'
import Register from './screens/Register'
import SignIn from './screens/SignIn'
import authActions from './redux/actions/authActions'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import { StyleSheet} from 'react-native';
import { useEffect } from 'react';
import { Button, Text, View,TouchableOpacity} from 'react-native';


const Stack = createStackNavigator()
// guardo en const Stack, función que posibilita navegar en stacks de screens

export const Nav = (props) => {

  const desloguear = () => {
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Initiation} options={{ title: "Welcome to Home" }} />
      </Stack.Navigator>
    </NavigationContainer>

  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Initiation} options={{ title: "Welcome to Home" }} />
          <Stack.Screen name="Register" component={Register} options={{ title: "You are in Sign Up" }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ title: "You are in Sign In" }} />
          <Stack.Screen name="Cities" component={Home} options={{ title: "Tour the cities"}} />
          <Stack.Screen name="Itinerary" component={Itinerary} options={{ title: "Enjoy Itineray" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: "5%",
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center"
  },
  texto: {
    fontSize: 15,
    color: "grey",
    textAlign: 'center',
  },
  textHeader: {
    padding: 3,
    marginLeft: 3,
    fontSize: 16,
    fontWeight:"bold",
    textAlign: 'center',
  },
});
const mapStateToProps = state => {
  return {
    loggedUser: state.authReducers.loggedUser
  }
}

const mapDispatchToProps = {
  localStorage : authActions.logStorage
}

export default connect (mapStateToProps,mapDispatchToProps) (Nav)