// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8gD2RGcC0jRDflkOJf51b1ubzIcakLc",
  authDomain: "learnskill-af57d.firebaseapp.com",
  projectId: "learnskill-af57d",
  storageBucket: "learnskill-af57d.firebasestorage.app",
  messagingSenderId: "72940332051",
  appId: "1:72940332051:web:2b5798cc1134fb6e3a8be6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;