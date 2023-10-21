// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvPBrPVpXrnDXoMSZHV000AAiwSpFMv9k",
  authDomain: "first-app-93c43.firebaseapp.com",
  projectId: "first-app-93c43",
  storageBucket: "first-app-93c43.appspot.com",
  messagingSenderId: "147071928497",
  appId: "1:147071928497:web:7c8510df075fc268023a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);