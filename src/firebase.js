// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chat-app-sample-5554f.firebaseapp.com",
  projectId: "chat-app-sample-5554f",
  storageBucket: "chat-app-sample-5554f.appspot.com",
  messagingSenderId: "344667068045",
  appId: "1:344667068045:web:0e7bea7bdf81211cfdb4c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);