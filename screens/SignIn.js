import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import React, {useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity,Alert, ImageBackground} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const SignIn = (props) => {

    const [usuarioLogueado, setUsuarioLogueado] = useState({})
    const [errores, setErrores] = useState({})

    const leerInput = (campo,valor) => { //recibe el evento
        setUsuarioLogueado ({ //modifica el usuario que tengo en el state
            ...usuarioLogueado,//con lo que ya tiene
            [campo]:valor//y en el campo con el valor
        })
    }

    const validarUsuario = async e => {// funcion cuando le hace click a validar
        e.preventDefault()//prevenir que recargue la pagina
        if( usuarioLogueado.email === "" || usuarioLogueado.password === ""){
            alert('falta llenar campos')
            return false
        }
        setErrores([])
        const respuesta = await props.logInUser(usuarioLogueado)
        console.log(respuesta)
        if(respuesta && !respuesta.success){
            setErrores([respuesta.errores])
        }else{
            alert ('Welcome!')
            props.navigation.navigate('Cities')
        }
    }

    return (
        <View style={styles.header}>
            <ImageBackground style={styles.image} source={require('../assets/luna.jpg')}>
            <ScrollView>
                <View style={styles.contenedorInput}>
                    <View style={styles.Input}>
                    <Text style={styles.textTitle}>SignIn</Text>
                        <TextInput style={styles.input}  placeholder='Email' onChangeText={(value) => leerInput("email", value)}></TextInput>
                        <TextInput style={styles.input}  placeholder='Password' name="password" onChangeText={(value) => leerInput("password", value)}></TextInput>
                        <TouchableOpacity  onPress={validarUsuario} style={styles.button}>
                            <Text style={styles.texto}>SignIn</Text>
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
            borderColor:"white",
            borderRadius:50,
            margin:40,
            marginTop:100
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
        logInUser: authActions.logInUser //newUser es una funcion que despacha una accion
    }
    

    export default connect(mapStateToProps,mapDispatchToProps) (SignIn)

