import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh27hYnYAO593HjB3NsZMwa45Gb37U5uE",
  authDomain: "odohaeng.firebaseapp.com",
  projectId: "odohaeng",
  storageBucket: "odohaeng.firebasestorage.app",
  messagingSenderId: "225373611175",
  appId: "1:225373611175:web:1b51e6ff66a30abacae782",
  measurementId: "G-HSB9DVRF5Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
