import React from 'react';
// import * as firebase from firebase;

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



var firebaseConfig = {
  apiKey: "AIzaSyBR0h-hCFeFGaBfayBZFoYtmTdrIG9RSwA",
  authDomain: "webapp-6ca07.firebaseapp.com",
  projectId: "webapp-6ca07",
  storageBucket: "webapp-6ca07.appspot.com",
  messagingSenderId: "90799020991",
  appId: "1:90799020991:web:b88c96b47ac186668cdf0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;