import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCg4YUTln2ZLF5dgFSTUf6axHQxkRTlKOA",
  authDomain: "jsfullstack-boomer.firebaseapp.com",
  databaseURL: "https://jsfullstack-boomer.firebaseio.com",
  projectId: "jsfullstack-boomer",
  storageBucket: "jsfullstack-boomer.appspot.com",
  messagingSenderId: "373443573918"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;