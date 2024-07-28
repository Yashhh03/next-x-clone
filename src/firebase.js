// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-x-8a377.firebaseapp.com",
  projectId: "next-x-8a377",
  storageBucket: "next-x-8a377.appspot.com",
  messagingSenderId: "634741466850",
  appId: "1:634741466850:web:1a049512017387154ae0bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, getFirestore };
