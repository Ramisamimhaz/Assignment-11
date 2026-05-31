// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoYuL9pk7HkRvKgdga_d60QVblc7jzSMc",
  authDomain: "krishnik-farmer.firebaseapp.com",
  projectId: "krishnik-farmer",
  storageBucket: "krishnik-farmer.firebasestorage.app",
  messagingSenderId: "532457149507",
  appId: "1:532457149507:web:31471c133d65b37100f0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);