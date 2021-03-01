import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    loggedUser: null
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER': //para cuando el usuario va a crear una cuenta o a loguearse
            // AsyncStorage.setItem('userName',action.payload.respuesta.userName)
            // AsyncStorage.setItem('token',action.payload.respuesta.token)
            return {
                ...state,
                loggedUser:action.payload.respuesta
            }

        case 'LOG_OUT_USER' :
            AsyncStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
        default:
            return state
    }
}

export default authReducers