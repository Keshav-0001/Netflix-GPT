// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAtStdmKMfdhm5YAQzE-Hj43h8UM_I83Q",
  authDomain: "netflixgpt-28746.firebaseapp.com",
  projectId: "netflixgpt-28746",
  storageBucket: "netflixgpt-28746.appspot.com",
  messagingSenderId: "705447020819",
  appId: "1:705447020819:web:8d6a4b2cc0657ef47372e6",
  measurementId: "G-REE576FP4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();