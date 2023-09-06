// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-DpSKX2PS55YnvPujTYTJu967ebSJcIA",
  authDomain: "vue-firebase-590ed.firebaseapp.com",
  projectId: "vue-firebase-590ed",
  storageBucket: "vue-firebase-590ed.appspot.com",
  messagingSenderId: "55169526745",
  appId: "1:55169526745:web:260bc9c4d44e40f3f287c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)