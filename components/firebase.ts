import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

 const firebaseApp = firebase.initializeApp({
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STOTAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID
})



export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()