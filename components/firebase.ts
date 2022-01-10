import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

 const firebaseApp = firebase.initializeApp({
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STOTAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID
})

console.log(firebaseApp)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()