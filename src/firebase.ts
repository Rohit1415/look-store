// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtsk_FIIr-ByCpStVuvjpmOGqHVwqxATQ",
  authDomain: "exclusive-store-1.firebaseapp.com",
  projectId: "exclusive-store-1",
  storageBucket: "exclusive-store-1.appspot.com",
  messagingSenderId: "1069571557082",
  databaseURL: 'https://exclusive-store-1-default-rtdb.firebaseio.com',
  appId: "1:1069571557082:web:a1ce3b887e7e893c6287e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;