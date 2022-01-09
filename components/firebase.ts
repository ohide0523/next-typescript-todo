import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APILEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_PROJECT,
  messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID
})

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()