import firebase from "firebase";

const firebaseConfig = 
  {
    apiKey: "AIzaSyC86J8YagUXaZY7mI2U3kcW-X-NSAO3JQg",
    authDomain: "fir-d64d9.firebaseapp.com",
    databaseURL: "https://fir-d64d9.firebaseio.com",
    projectId: "fir-d64d9",
    storageBucket: "fir-d64d9.appspot.com",
    messagingSenderId: "39100794415",
    appId: "1:39100794415:web:073614c71b1daf4336e8da"
  };


// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

//this is for demo purpose
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

//Use this in everywhere
export default fire;
