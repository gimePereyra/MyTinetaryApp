import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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

    console.log(itineraries)

    const refresh = () =>{}

    return (
        <View style={styles.header}>
            <ScrollView  refreshControl={
                <RefreshControl onRefresh={refresh}/>
            }>
                <ImageBackground style={styles.ImagenCity}  source={{uri:imgCity}}>
                    <Text style={styles.nameCity}>{nameCity}</Text>
                </ImageBackground>
                {itineraries.length === 0 ? <Text>No hay itinerarios aun para esta ciudad</Text>
                : itineraries.map(itinerary => {
                    return(
                    <View>
                            <Text style={styles.itinerary}>{itinerary.title}</Text>
                    </View>
                    )
                })}
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

    export default Itinerary