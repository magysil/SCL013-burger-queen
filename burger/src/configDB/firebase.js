import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBdR976h4n0jeNKkiS4ekXKNiowgPkETUQ",
    authDomain: "burgerqueen-615be.firebaseapp.com",
    databaseURL: "https://burgerqueen-615be.firebaseio.com",
    projectId: "burgerqueen-615be",
    storageBucket: "burgerqueen-615be.appspot.com",
    messagingSenderId: "11127609341",
    appId: "1:11127609341:web:acafbd3c9a646fe9672b94",
    measurementId: "G-F8SQJRPE9J"
  };

firebase.initializeApp(config);

let db = firebase.firestore();
export default db;
