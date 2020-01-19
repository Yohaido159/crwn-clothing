import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDFmvG5DB7IPIwinAjdNQQWoKwRV_7_73w",
    authDomain: "crwn-db-89201.firebaseapp.com",
    databaseURL: "https://crwn-db-89201.firebaseio.com",
    projectId: "crwn-db-89201",
    storageBucket: "crwn-db-89201.appspot.com",
    messagingSenderId: "188147830148",
    appId: "1:188147830148:web:bf64bcd553212b53f9e1d1",
    measurementId: "G-BFQ2H6C603"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
    console.log("hi");
    auth.signInWithPopup(provider)
};

export default firebase;

