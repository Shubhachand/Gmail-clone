// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBABdvpimkVNF6LkAuZkTGjD40_qz_kl28",
  authDomain: "clone-45deb.firebaseapp.com",
  projectId: "clone-45deb",
  storageBucket: "clone-45deb.firebasestorage.app",
  messagingSenderId: "662645117070",
  appId: "1:662645117070:web:8445c1d5895e6ab397b9df",
  measurementId: "G-GHJGWQ9YNP"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();


