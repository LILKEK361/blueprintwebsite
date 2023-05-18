
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBrUB1UOuHDO0X6iZq5CllMczFABlOEpi4",
    authDomain: "snusranker.firebaseapp.com",
    databaseURL: "https://snusranker-default-rtdb.firebaseio.com",
    projectId: "snusranker",
    storageBucket: "snusranker.appspot.com",
    messagingSenderId: "466803051418",
    appId: "1:466803051418:web:49cc427fda722514cfc823",
    measurementId: "G-9QMC8SVJ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)


export function readSnusData()  {
    let startRef = ref(db, "/")
    let Data;
    onValue(startRef, (snapshot) => {
        Data = snapshot.val()
        console.log(Data)

    })

}