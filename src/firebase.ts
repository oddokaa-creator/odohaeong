import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "odohaeng.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "odohaeng",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "odohaeng.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "225373611175",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:225373611175:web:1b51e6ff66a30abacae782",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-HSB9DVRF5Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
