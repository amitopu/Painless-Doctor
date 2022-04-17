// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhBzDdThELmLmt_pTuZ03tsux_oRIzogo",
    authDomain: "assignment-10-f79a9.firebaseapp.com",
    projectId: "assignment-10-f79a9",
    storageBucket: "assignment-10-f79a9.appspot.com",
    messagingSenderId: "40804743214",
    appId: "1:40804743214:web:f3e34a07c417b5342d87bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
