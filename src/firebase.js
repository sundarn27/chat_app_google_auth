import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore'; 

firebase.initializeApp({
    apiKey: "AIzaSyDduG7Skf6M6y4H918-Q9Y0s3NwzgJNWho",
    authDomain: "ars-chat.firebaseapp.com", 
    databaseURL: "https://ars-chat-default-rtdb.firebaseio.com",
    projectId: "ars-chat",
    storageBucket: "ars-chat.appspot.com",
    messagingSenderId: "1026166012119",
    appId: "1:1026166012119:web:4c775c4a40777fe6851892",
    measurementId: "G-ZFTCJ9XY3G"
})

export const auth = firebase.auth();
export const db = firebase.firestore();
