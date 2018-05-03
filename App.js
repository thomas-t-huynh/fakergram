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
import { startGetInfo } from './src/actions/info';

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

firebase.auth().onAuthStateChanged( async (user) => {
  if (user) {
    await store.dispatch(login(user.uid));
    // await store.dispatch(startGetInfo());
    Actions.main();
  
  } else {
    store.dispatch(logout());
  }
});