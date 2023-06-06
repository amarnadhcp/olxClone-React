import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'


// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsnKZH3DLZWwF1L88dvz-7RKMULdlBIwU",
  authDomain: "olxclone-3e13d.firebaseapp.com",
  projectId: "olxclone-3e13d",
  storageBucket: "olxclone-3e13d.appspot.com",
  messagingSenderId: "276366392241",
  appId: "1:276366392241:web:a33f02a7fdeceab3e4db90",
  measurementId: "G-4Z5D0Y2P8C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
