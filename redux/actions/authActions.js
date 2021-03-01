import axios from 'axios'

const authActions = {
    newUser: (usuario) => {
        return async (dispatch) => {
            const respuesta = await axios.post('https://pereyra-mitinerary.herokuapp.com/api/user/register', usuario)///esto viaja al backend, va a router, busca la ruta
            if(!respuesta.data.success) return respuesta.data
            dispatch({type: 'LOG_USER', payload: respuesta.data})//lo que ma contesto el backend se lo mando al reducers
        }
    },

    logInUser: user => {
        return async (dispatch) => {
            const respuesta = await axios.post('https://pereyra-mitinerary.herokuapp.com/api/user/singIn',user)
            if(!respuesta.data.success) return respuesta.data;

            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    },

    logOutUser: () => {
        return async (dispatch) => {
            dispatch({type:'LOG_OUT_USER'})
        }
    },

    logStorage: (userName,picUser,token) => {
        return (dispatch) => {
            dispatch({type: 'LOG_USER', payload: {respuesta:{userName:userName,picUser,token}}})
        }
    }
}

export default authActions