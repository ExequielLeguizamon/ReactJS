// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOz0haHzIx40ygpJ-8YRfTPfQqAUhp-jg",
  authDomain: "reactjs-fb-2bde5.firebaseapp.com",
  projectId: "reactjs-fb-2bde5",
  storageBucket: "reactjs-fb-2bde5.appspot.com",
  messagingSenderId: "52363501838",
  appId: "1:52363501838:web:cc3bcfe661d185cfa5775f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)