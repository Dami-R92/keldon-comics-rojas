
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCl77h-IheC15KhWzqVCdSwnzQ3IqfDVZY",
    authDomain: "keldon-comics-rojas.firebaseapp.com",
    projectId: "keldon-comics-rojas",
    storageBucket: "keldon-comics-rojas.appspot.com",
    messagingSenderId: "393151327597",
    appId: "1:393151327597:web:8568b82ceeccfef15d3e64"
  };
  // Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();;

export const itemsCollection = firebase.firestore(app).collection('products')
export const usersCollection = firebase.firestore(app).collection('users')