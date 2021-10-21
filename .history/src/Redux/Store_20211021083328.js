import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyCq3lQoTA1JjMTQiRhWcQGwA3F5Qi-idDU",
  authDomain: "curd-feature.firebaseapp.com",
  projectId: "curd-feature",
  storageBucket: "curd-feature.appspot.com",
  messagingSenderId: "100609889200",
  appId: "1:100609889200:web:5abf95f6ed5f5edf483c75",
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
