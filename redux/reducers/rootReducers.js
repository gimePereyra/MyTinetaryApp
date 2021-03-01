import authReducers from './authReducers'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    authReducers: authReducers
})

export default rootReducers