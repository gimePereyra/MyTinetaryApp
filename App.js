import 'react-native-gesture-handler';
import React from 'react';
import Nav from './Nav'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducers from './redux/reducers/rootReducers'
import thunk from 'redux-thunk'

const miStore = createStore(rootReducers, applyMiddleware(thunk)) // middleware funcion

const App= () => {
  return (
    <Provider store={miStore}>
      <Nav />
    </Provider>
  );
}


export default App