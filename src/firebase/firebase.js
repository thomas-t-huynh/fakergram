import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDkaI6XHiGW0KGFi40OrgKHQpBmV2xPBv4",
    authDomain: "gallery-63070.firebaseapp.com",
    databaseURL: "https://gallery-63070.firebaseio.com",
    projectId: "gallery-63070",
    storageBucket: "gallery-63070.appspot.com",
    messagingSenderId: "713939760147"
  };

  firebase.initializeApp(config);
  
  const database = firebase.database();
  
 
  export { firebase, database as default };