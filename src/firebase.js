import firebase from 'firebase/app'
import 'firebase/auth'

export const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
})

export const auth = app.auth()