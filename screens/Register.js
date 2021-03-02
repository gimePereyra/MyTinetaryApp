import { StatusBar } from 'expo-status-bar';
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, RefreshControl} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const Register = (props) => {

    const [usuario, setUsuario] = useState({})
    const [errores, setErrores] = useState({})
    const leerInput = (campo,valor) => { //recibe el evento
        setUsuario ({ //modifica el usuario que tengo en el state
            ...usuario,//con lo que ya tiene
            [campo]:valor//y en el campo con el valor
        })
    }

    const validarUsuario = async e => {// funcion cuando le hace click a validar
        e.preventDefault()//prevenir que recargue la pagina
        if(usuario.name === "" || usuario.lastNameUser === "" || usuario.email === "" || usuario.password === ""){
            alert ('falta de llenar campos')
            return true
        }
        setErrores([])

        const respuesta = await props.newUser(usuario)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores.details)
        }else{
            alert ('User saved successfully')
            props.navigation.navigate('Cities')
        }
    }

    return (
        <View style={styles.header}>
            <ImageBackground style={styles.image} source={require('../assets/luna.jpg')}>
            <ScrollView>
                <View style={styles.contenedorInput}>
                <View style={styles.Input}>
                    <Text style={styles.textTitle}>Register</Text>
                    <TextInput style={styles.input}  placeholder="First name" onChangeText={(value) => leerInput("name", value)}></TextInput>
                    <TextInput style={styles.input}  placeholder="Last name" onChangeText={(value) => leerInput("lastNameUser", value)}></TextInput>
                    <TextInput style={styles.input}  placeholder='Email' onChangeText={(value) => leerInput("email", value)}></TextInput>
                    <TextInput style={styles.input}  placeholder='Password' name="password" onChangeText={(value) => leerInput("password", value)}></TextInput>
                    <TouchableOpacity  onPress={validarUsuario} style={styles.button}>
                        <Text style={styles.texto}>Register</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
    }

    const styles = StyleSheet.create({
        header: {
            flex: 1,
            width: "100%",
            justifyContent:'center',
            alignItems:'center',
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            width:'100%'
        },
        contenedorInput: {
            flex:1,
            justifyContent:'center',
            width: "80%",
            height: "100%",
            padding:'5%',
            borderRadius:50,
            margin:40,
            marginTop:55
        },
        Input: {
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginBottom:25
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
        input: {
            borderWidth: 1,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 18,
            margin: 10,
            width: "100%",
            textAlign: "center"
        },
        button: {
            backgroundColor: "blue",
            width: "60%",
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: "center",
            padding:'5%'
        },
    texto: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
    },
    textTitle:{
        fontSize:30,
        color:'white',
        marginTop:25
    }
    });

    const mapStateToProps = state => {
        return {
            loggedUser: state.authReducers.loggedUser
        }
    }
    
    const mapDispatchToProps = { // map las acciones, lo que despacho
        newUser: authActions.newUser //newUser es una funcion que despacha una accion
    }

    export default connect(mapStateToProps,mapDispatchToProps) (Register)