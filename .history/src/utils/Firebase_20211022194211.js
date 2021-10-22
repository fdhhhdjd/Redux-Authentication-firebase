import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCq3lQoTA1JjMTQiRhWcQGwA3F5Qi-idDU",
  authDomain: "curd-feature.firebaseapp.com",
  projectId: "curd-feature",
  storageBucket: "curd-feature.appspot.com",
  messagingSenderId: "100609889200",
  appId: "1:100609889200:web:5abf95f6ed5f5edf483c75",
};
const firebaseDB = firebase.initializeApp(firebaseConfig);
const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export { auth, googleAuthProvider, facebookAuthProvider, db };
