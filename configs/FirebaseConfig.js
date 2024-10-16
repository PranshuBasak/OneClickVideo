// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "saas-project-4d7c8.firebaseapp.com",
  projectId: "saas-project-4d7c8",
  storageBucket: "saas-project-4d7c8.appspot.com",
  messagingSenderId: "381101874908",
  appId: "1:381101874908:web:9a387efb352c83a2c31e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)