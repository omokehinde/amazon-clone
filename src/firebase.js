import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdeJ8b7GRm9mtZ4qUs2xjDSRoJLQ5oSao",
    authDomain: "clone-c6f5a.firebaseapp.com",
    databaseURL: "https://clone-c6f5a.firebaseio.com",
    projectId: "clone-c6f5a",
    storageBucket: "clone-c6f5a.appspot.com",
    messagingSenderId: "607374978745",
    appId: "1:607374978745:web:b0775ccac9406dbf167568",
    measurementId: "G-RCD78EDQ95"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };