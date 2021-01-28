import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBsQZlS9dXVkrD9oN0A5z4kARv4nfsvmkY",
    authDomain: "deguzmanstuffanywhere-photos.firebaseapp.com",
    databaseURL: "https://deguzmanstuffanywhere-photos.firebaseio.com",
    projectId: "deguzmanstuffanywhere-photos",
    storageBucket: "deguzmanstuffanywhere-photos.appspot.com",
    messagingSenderId: "79629300",
    appId: "1:79629300:web:6efec90e5b04c0c2c5c7a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();

  const firestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {
      projectStorage,
      firestore,
      timestamp
  };