import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD4IobUvaiXPRX-V71EgDk3a3-uHLwexqE",
  authDomain: "tik-tok-clone-7a31f.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-7a31f.firebaseio.com",
  projectId: "tik-tok-clone-7a31f",
  storageBucket: "tik-tok-clone-7a31f.appspot.com",
  messagingSenderId: "500186178170",
  appId: "1:500186178170:web:9364d4a48761569b0c51c3",
  measurementId: "G-4FJ3YJTCNG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
