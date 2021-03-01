import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SignIn = () => {

    return (
        <View style={styles.header}>
            <ScrollView>
                <TextInput placeholder='Email' type='text'></TextInput>
                <TextInput placeholder='Password' type='password'></TextInput>
            </ScrollView>
        </View>
    );
    }

    const styles = StyleSheet.create({
        header: {
            flex: 1,
        },
        containerCard:{
            flex:1,
            flexDirection:'column',
        },
        cardCity:{
            backgroundColor:'tomato',
            width:'100%',
            height:'100%',
        },
        ImagenCity:{
            padding:'20%',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'5%'
        },
        nameCity:{
            padding:'2%',
            fontSize:20,
            color:'white',
            textAlign:'center',
            backgroundColor:'black',
            width:'200%',
    },
    itinerary: {
        color:'black',
        fontSize:20
    }
    });

    export default SignIn