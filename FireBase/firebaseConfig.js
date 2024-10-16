// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Sn-a1aWr9YHJIjDAz3tzFEfcdB30Fss",
  authDomain: "reactbatch-d1a6a.firebaseapp.com",
  projectId: "reactbatch-d1a6a",
  storageBucket: "reactbatch-d1a6a.appspot.com",
  messagingSenderId: "457549934884",
  appId: "1:457549934884:web:aab748b53ee613789e43b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db};