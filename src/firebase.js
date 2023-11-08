// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSQVt87VnEv5doBDAPHrKEQ0jjZ4Nmc4",
  authDomain: "fb-crud-react-1d4a7.firebaseapp.com",
  projectId: "fb-crud-react-1d4a7",
  storageBucket: "fb-crud-react-1d4a7.appspot.com",
  messagingSenderId: "649445569034",
  appId: "1:649445569034:web:2fdcb7bc651c347ae165f3"
};

// Initialize Firebase
const app         = initializeApp(firebaseConfig);

export const db   = getFirestore(app);
