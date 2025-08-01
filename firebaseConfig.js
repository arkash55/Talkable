// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpAsgT_-O7gdsFXPf7XFtMWbZh_QH4eI",
  authDomain: "talkable-cf88e.firebaseapp.com",
  projectId: "talkable-cf88e",
  storageBucket: "talkable-cf88e.firebasestorage.app",
  messagingSenderId: "544399554291",
  appId: "1:544399554291:web:242dd206a8e928d898e986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);