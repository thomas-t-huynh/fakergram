import { firebase } from '../firebase/firebase';
import database from '../firebase/firebase';
import { startAddInfo } from './info';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = ({ email, password }) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
};

export const createUser = ({ email, password }) => {
  return (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      dispatch(startLogin({ email, password })).then(() => {
        dispatch(startAddInfo());
      })
    })
  }
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
