// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1-IPvbJVPGuMhHkgovtsXOByBjQDfABA",
  authDomain: "news-d049d.firebaseapp.com",
  projectId: "news-d049d",
  storageBucket: "news-d049d.appspot.com",
  messagingSenderId: "126903081421",
  appId: "1:126903081421:web:79fffef319ef6f083e8c84",
  measurementId: "G-PS2P5TX20Q"
};

// Initialize Firebase
export const newsChallengueFirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(newsChallengueFirebaseApp)