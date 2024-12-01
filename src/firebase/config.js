// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEt673MRYTDDIedTDdZ9KKCa8rRGvRE4",
  authDomain: "react-journal-app-f5251.firebaseapp.com",
  projectId: "react-journal-app-f5251",
  storageBucket: "react-journal-app-f5251.firebasestorage.app",
  messagingSenderId: "1006108237417",
  appId: "1:1006108237417:web:841e82226187117102ccf8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseFireStore = getFirestore(FirebaseApp);
