const initialState = {
    loggedUser: null
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER': //para cuando el usuario va a crear una cuenta o a loguearse
            localStorage.setItem('userName',action.payload.respuesta.userName)
            localStorage.setItem('picUser',action.payload.respuesta.picUser)
            localStorage.setItem('token',action.payload.respuesta.token)
            return {
                ...state,
                loggedUser:action.payload.respuesta
            }

        case 'LOG_OUT_USER' :
            localStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
        default:
            return state
    }
}

export default authReducers