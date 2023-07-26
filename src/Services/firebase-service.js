// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl58vPNWYwiB7GVWxl7PhDWiBbkppm2FE",
  authDomain: "account-details-33e22.firebaseapp.com",
  databaseURL: "https://account-details-33e22-default-rtdb.firebaseio.com",
  projectId: "account-details-33e22",
  storageBucket: "account-details-33e22.appspot.com",
  messagingSenderId: "15297140345",
  appId: "1:15297140345:web:2a557db7f2ef15d19be6a8",
  measurementId: "G-C167RWDFRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;