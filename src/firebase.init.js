// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1FxA4SEDOtLDj7p7884fLg-UG7_-7Cyw",
    authDomain: "mehedi-click-1f85a.firebaseapp.com",
    projectId: "mehedi-click-1f85a",
    storageBucket: "mehedi-click-1f85a.appspot.com",
    messagingSenderId: "1008589381249",
    appId: "1:1008589381249:web:b9d3281fd48f50776a3780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;