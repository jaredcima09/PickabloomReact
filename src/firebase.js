import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAUwHx-krVGCtUaHKxwCHel5GK-_xN6emo",
    authDomain: "pickabloom-3a899.firebaseapp.com",
    databaseURL: "https://pickabloom-3a899.firebaseio.com",
    projectId: "pickabloom-3a899",
    storageBucket: "pickabloom-3a899.appspot.com",
    messagingSenderId: "903864556181",
    appId: "1:903864556181:web:412d5452689c7d04b8d99c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;