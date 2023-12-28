import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC5k79IT3w-Sc3TGMz2WDtqkdbv8NRNy-s",
    authDomain: "techcrunch-2f06a.firebaseapp.com",
    projectId: "techcrunch-2f06a",
    storageBucket: "techcrunch-2f06a.appspot.com",
    messagingSenderId: "486686428982",
    appId: "1:486686428982:web:cac11ebc02c7d0e9cdad97"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const app = initializeApp(firebaseConfig)

export { timestamp };
export default firebaseApp.firestore();