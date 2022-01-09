import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDcNmL29AxEAnCxZ6AGr6IHA9908P7WTPo",
    authDomain: "unichat-cdeca.firebaseapp.com",
    projectId: "unichat-cdeca",
    storageBucket: "unichat-cdeca.appspot.com",
    messagingSenderId: "972490656787",
    appId: "1:972490656787:web:6dcb442b89db69930443e6"
  }).auth();