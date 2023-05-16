// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrUB1UOuHDO0X6iZq5CllMczFABlOEpi4",
    authDomain: "snusranker.firebaseapp.com",
    projectId: "snusranker",
    storageBucket: "snusranker.appspot.com",
    messagingSenderId: "466803051418",
    appId: "1:466803051418:web:49cc427fda722514cfc823",
    measurementId: "G-9QMC8SVJ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

