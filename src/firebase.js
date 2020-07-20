import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyAxXBypEdNzidA3diZwu3REambMkAm-FuA",
  authDomain: "rickandmortyrrg.firebaseapp.com",
  databaseURL: "https://rickandmortyrrg.firebaseio.com",
  projectId: "rickandmortyrrg",
  storageBucket: "rickandmortyrrg.appspot.com",
  messagingSenderId: "491008317717",
  appId: "1:491008317717:web:53454b9843fb0b8c75711c",
  measurementId: "G-CHFPHT3EEJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

let db = firebase.firestore().collection('favs')

export function getFavs(uid) { 
  return db.doc(uid).get()
    .then(snap => {
      return snap.data().favoritos
    })
}

export function updateDB(array, uid) {
  return db.doc(uid).set( { favoritos: [...array] })
}

export function signOutGoogle() {
  firebase.auth().signOut()
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
  .then( snap => snap.user)
}