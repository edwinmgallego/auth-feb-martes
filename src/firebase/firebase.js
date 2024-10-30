// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUMkhPh6bPAbBPbptWul9QmEKTuJ-WBo",
  authDomain: "perencejito-bd.firebaseapp.com",
  projectId: "perencejito-bd",
  storageBucket: "perencejito-bd.appspot.com",
  messagingSenderId: "584240727649",
  appId: "1:584240727649:web:8e451c6f0a7b18931b4c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
