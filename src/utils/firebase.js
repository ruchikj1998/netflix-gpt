// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNkWJmSK0Es5ona7effL4oGgn7KkXqPh8",
  authDomain: "netflixgpt-64ad3.firebaseapp.com",
  projectId: "netflixgpt-64ad3",
  storageBucket: "netflixgpt-64ad3.appspot.com",
  messagingSenderId: "591298669786",
  appId: "1:591298669786:web:0ede6b51c5a8be58b6c9e3",
  measurementId: "G-QZSQLTHDB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();