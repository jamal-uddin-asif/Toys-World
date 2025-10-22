// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgJrfM3DnBvf78Sku0Qb0JKws1DV-8grM",
  authDomain: "toys-world-51b05.firebaseapp.com",
  projectId: "toys-world-51b05",
  storageBucket: "toys-world-51b05.firebasestorage.app",
  messagingSenderId: "787638047119",
  appId: "1:787638047119:web:8c651087ce0d966727bbfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);