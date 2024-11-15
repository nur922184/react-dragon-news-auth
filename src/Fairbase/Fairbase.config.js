// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVBTJO_HBwLSdc9bDZi4zfKUyK8o8Kq0E",
  authDomain: "react-dragon-news-auth-877e0.firebaseapp.com",
  projectId: "react-dragon-news-auth-877e0",
  storageBucket: "react-dragon-news-auth-877e0.firebasestorage.app",
  messagingSenderId: "15285809965",
  appId: "1:15285809965:web:dab2d164c63572d24959a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;