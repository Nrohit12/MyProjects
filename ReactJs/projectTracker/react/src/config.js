import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB-UnT35n0addZMwR4LE2NjXgaOZAgorA8",
  authDomain: "learn-df515.firebaseapp.com",
  projectId: "learn-df515",
  storageBucket: "learn-df515.appspot.com",
  messagingSenderId: "379600932713",
  appId: "1:379600932713:web:b195ea0735de1144d9f7f8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
