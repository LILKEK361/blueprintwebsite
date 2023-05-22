
// @ts-ignore
import { initializeApp } from "firebase/app";
// @ts-ignore
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


export  async function readSnusData(callback : any)  {
    let startRef = ref(db, "/")
    let Data = {};
    try {
         await onValue(startRef, (snapshot : any) => {

                Data = snapshot.val()
                 console.log("readData: " + Data)
                callback(Data)
            },
            {onlyOnce : true})
    }catch (e) {
        console.log(e)
    }

}

export async function awaitData(){
    let Data
    await readSnusData((readData : any) =>{
        Data = readData

    });
    return Data
}

