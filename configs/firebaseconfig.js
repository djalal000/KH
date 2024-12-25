// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWPzrkqb1iadO8FeMvvGAlEimKqwuC_E",
  authDomain: "khadma-383d5.firebaseapp.com",
  projectId: "khadma-383d5",
  storageBucket: "khadma-383d5.firebasestorage.app",
  messagingSenderId: "889537231225",
  appId: "1:889537231225:web:c91ec822116c3bf33b97a8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
  export const db = getFirestore(app);