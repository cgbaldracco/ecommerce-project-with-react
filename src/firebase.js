// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4C7RCkabck30O8XjIDGa7v2GFwynUKIQ",
  authDomain: "react-fb-auth-b6303.firebaseapp.com",
  projectId: "react-fb-auth-b6303",
  storageBucket: "react-fb-auth-b6303.appspot.com",
  messagingSenderId: "327825459728",
  appId: "1:327825459728:web:3b62e447de8abbd9cb5895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);