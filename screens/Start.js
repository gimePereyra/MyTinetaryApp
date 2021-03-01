import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, Button, TouchableOpacity } from 'react-native';

const Initiation= ( props) => {
    return (
        <View style={styles.header}  >
            <ImageBackground style={styles.image} source={require('../assets/inicio.jpg')}>
                <View  style={styles.logo}>
                    <Image style={styles.ImageLogo} source={require('../assets/logoApp.png')} />
                </View>
                <View>
                    <Text style={styles.text}>¡ Discover what we have for you !</Text>
                </View>
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton} onPress={()=>props.navigation.navigate('Home')}>Discover »</Text>
                        <Text style={styles.textButton} onPress={()=>props.navigation.navigate('Register')}>Register »</Text>
                        <Text style={styles.textButton} onPress={()=>props.navigation.navigate('SignIn')}>SignIn »</Text>
                    </TouchableOpacity>
                    
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width:'100%',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo: {
        width:'100%',
        height:'25%',
        alignItems:'center',
    },
    ImageLogo: {
        width:'100%',
        height:'60%',
    },
    text:{
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    button :{
        marginBottom:'60%',
        marginTop:'10%',
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
        fontSize:20,
        color:'white',
        backgroundColor:'blue',
        width:'60%',
        padding:'2%',
        textAlign:'center',
        borderRadius:25,
        marginBottom:'5%',
    }

});

export default Initiation