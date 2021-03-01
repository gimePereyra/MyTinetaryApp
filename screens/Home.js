import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = (props) => {
    const [cities, setCities] = useState([])

    useEffect (() => {
        fetch('https://pereyra-mitinerary.herokuapp.com/api/cities')
        .then(respuesta => respuesta.json())
        .then(data => setCities(data.respuesta))
    }, [])

    const refresh = () =>{}

    return (
        <View style={styles.header}>
            <ScrollView  refreshControl={
                <RefreshControl onRefresh={refresh}/>
            }>
                {cities.map( city => (
                    <View style={styles.containerCard}>
                        <TouchableOpacity  onPress={()=>props.navigation.navigate('Itinerary', {id: city._id, imagCity:city.imgCity, name: city.nameCity})} >
                            <ImageBackground style={styles.ImagenCity}  source={{uri:city.imgCity}}>
                                <Text style={styles.nameCity}>{city.nameCity}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                ))}
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
    }
    });

    export default Home