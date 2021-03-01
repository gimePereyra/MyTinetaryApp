import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';

const Itinerary = (props) => {
    console.log(props)
    const id = props.route.params.id
    const imgCity = props.route.params.imagCity
    const nameCity = props.route.params.name

    const [itineraries, setItineraries] = useState([])

    useEffect (() => {
        fetch('https://pereyra-mitinerary.herokuapp.com/api/itinerary/'+ id)
        .then(respuesta => respuesta.json())
        .then(data => setItineraries(data.respuesta))
    }, [])

    const refresh = () =>{}

    return (
        <View>
            <ScrollView  refreshControl={
                <RefreshControl onRefresh={refresh}/>
            }>
                <ImageBackground style={styles.ImagenCity}  source={{uri:imgCity}}>
                    <Text style={styles.nameCity}>{nameCity}</Text>
                </ImageBackground>
                {itineraries.length === 0 ?
                <ImageBackground  style={styles.ImagenCity} source={require('../assets/avionn.png')}>
                    <Text style={styles.text} >We are sorry ...</Text>
                    <Text style={styles.text} >There are no itineraries yet for this city.</Text>
                </ImageBackground>
                : itineraries.map(itinerary => {
                    return(
                    <View style={styles.contenedorItin}>
                        <View style={styles.contenedorUser}>
                            <ImageBackground imageStyle={{ borderRadius: 60 }} style={styles.imgItin} source={{ uri: itinerary.photoUser }} resizeMode="cover">
                            </ImageBackground>
                            <Text style={styles.textoInfo}>{itinerary.nameUser}</Text>
                        </View>

                        <View style={styles.contenedortexto}>
                            <Text style={styles.titleItin} >{itinerary.title}</Text>
                            <View style={styles.contenedorInfo}>
                                <MaterialIcons name="sentiment-very-satisfied" size={24} color="white" /> <Text style={styles.textoInfo}>{itinerary.like}</Text>
                                <FontAwesome name="money" size={24} color="white"/><Text style={styles.textoInfo}>{itinerary.price}</Text>
                                <MaterialIcons name="timer" size={24} color="white" /> <Text style={styles.textoInfo}>{itinerary.duration}</Text>
                            </View>
                            {itinerary.hashtags.map(hash => <Text style={styles.textoInfo}>{hash.hashtag}</Text>)}
                        </View>
                    </View>
                    )
                })}
            </ScrollView>
        </View>
    );
    }

    const styles = StyleSheet.create({
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
    text: {
        fontSize:20,
        backgroundColor:'white',
        color:'black',
        width:'100%',
        padding:'10%',
        textAlign:'center'
    },
    imgCity: {
        width: 400,
        height: 350,
        justifyContent: "center",
        margin:10,
    },
    textoCity: {
        backgroundColor: "rgba(0,0,0,0.56)",
        fontSize: 20,
        color: "white",
        textAlign: "center",
    },
    contenedorItin: {
        width: "95%",
        height: 200,
        backgroundColor: "black",
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 20,
        alignItems: "center",
        justifyContent:"center"

    },
    contenedorUser: {
        alignItems: "center",
        marginTop:15,
        marginEnd:'20%'
    },
    imgItin: {
        width: 80,
        height: 80,
    },
    contenedortexto: {
        width: 200,
        padding: 5,
        alignItems: "center",
    },
    titleItin: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        margin: 5,
        backgroundColor: "rgba(153, 50, 204,0.56)",
        width: "200%",
        borderWidth: 1,
        borderColor: "grey",
        },
    contenedorInfo: {
        margin: 15,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    textoInfo: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
        margin: 5,
        alignSelf:"center",
        margin:"5%"
    }
    });

    export default Itinerary