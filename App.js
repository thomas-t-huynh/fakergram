import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import store from './src/store/configureStore';
import { firebase } from './src/firebase/firebase';
import AppRouter from './src/router/AppRouter';
import { Actions } from 'react-native-router-flux';

import { login, logout } from './src/actions/auth';
import { startGetPics } from './src/actions/pics';

import Login from './src/components/Login';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppRouter />
        </Provider>
    );
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startGetPics()).then(() => {
            
      Actions.main();
    })
  } else {
    store.dispatch(logout());
  }
});