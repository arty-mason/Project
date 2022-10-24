// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6KHFAjr8gMl_2uMXBukieLQfrWCiZWjo",
  authDomain: "collections-lib.firebaseapp.com",
  projectId: "collections-lib",
  storageBucket: "collections-lib.appspot.com",
  messagingSenderId: "820830824969",
  appId: "1:820830824969:web:6a6a4c3d51a7ac3bf266d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
