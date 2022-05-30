import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAc0zl4vgbbPCuLESBIT33GW_cfJq8lDdU",
    authDomain: "e-library-app-a4170.firebaseapp.com",
    projectId: "e-library-app-a4170",
    storageBucket: "e-library-app-a4170.appspot.com",
    messagingSenderId: "1083737857553",
    appId: "1:1083737857553:web:8035dbe817ffd9907b5bb0",
    measurementId: "G-46E9WSKR7G"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
