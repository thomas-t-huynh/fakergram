import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/configureStore';
import { firebase } from './src/firebase/firebase';
import AppRouter from './src/router/AppRouter';
import { Actions } from 'react-native-router-flux';

import { login, logout } from './src/actions/auth';
import { startGetPics } from './src/actions/pics';

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
    Actions.main();
  
  } else {
    store.dispatch(logout());
  }
});