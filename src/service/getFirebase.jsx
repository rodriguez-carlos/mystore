import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLCXyVlAvqhVhBOJcnbAfQRlPFmqZCdu4",
    authDomain: "mystore-138bf.firebaseapp.com",
    projectId: "mystore-138bf",
    storageBucket: "mystore-138bf.appspot.com",
    messagingSenderId: "377553771586",
    appId: "1:377553771586:web:1c8b9ee5009d08ceeb21db"
};
  
const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}