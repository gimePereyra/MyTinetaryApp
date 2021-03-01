import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>chigüengüenchas !!</Text>
      <Text style={styles.text}>estoy creando</Text>
      <Text style={styles.text}>mi primer App</Text>
      <Text style={styles.text}>para celulares </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: '30%',
    color:'white'
  }
});

export default Home