import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //your config
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
