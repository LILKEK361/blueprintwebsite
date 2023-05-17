// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

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

export function writeSnusData(Name : String) {

    set(ref(db, "/" + Name), {
        Name: "",
        Link: "",
        Rating : {
            Taste : 0,
            Look  : 0,
            Box   : 0,
            Smell : 0,
            Overall : 0
        }
    });
}

export function readSnusData(){
    const startCountRef = ref(db, "/");
    let snusData;
    onValue(startCountRef, (snapshot) => {
        const data = snapshot.val();
        snusData = data;
    }, {
        onlyOnce : true
    });

    return snusData
}

export async function readSnusNames(){
    const startCountRef = ref(db,"/")
    let snusNames : String[] = [];
    try {
        onValue(startCountRef, (snapshot) => {

            const data = snapshot.val();
            snusNames = data.getKey();
        }, {
            onlyOnce :  true
        });
        return snusNames;
    } catch (e){
        console.log(e)
    }

}