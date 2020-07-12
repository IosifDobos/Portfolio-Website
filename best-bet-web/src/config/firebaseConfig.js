import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDaSOp47k0ucG1qxU5JP7yzijj35eTEULg",
    authDomain: "best-bet-90cb4.firebaseapp.com",
    databaseURL: "https://best-bet-90cb4.firebaseio.com",
    projectId: "best-bet-90cb4",
    storageBucket: "best-bet-90cb4.appspot.com",
    messagingSenderId: "1069414654435",
    appId: "1:1069414654435:web:45c09b6fbb7d78d4ff80d6",
    measurementId: "G-R2BWG7PSP9"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
  firebase.firestore();

  export default firebase;