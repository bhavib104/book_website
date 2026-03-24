import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// NOTE: Replace these with your own Firebase Project settings from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCldQ_Ijd69IjugJhFnAwW0c7Qt3QC9FuA",
  authDomain: "authorportfolio-3b742.firebaseapp.com",
  projectId: "authorportfolio-3b742",
  storageBucket: "authorportfolio-3b742.firebasestorage.app",
  messagingSenderId: "627261842397",
  appId: "1:627261842397:web:514cd2bd52154f38604c34",
  measurementId: "G-C07W6WXBCS"
};

// Initialize Firebase
let app;
let auth;
let db;
let googleProvider;

const isConfigValid = firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

if (isConfigValid) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase: Please set your API keys in src/firebase.js to enable login.");
}

export { auth, db, googleProvider };

export const signInWithGoogle = () => {
  if (!auth) {
    alert("Firebase is not configured. Please add your keys to src/firebase.js");
    return;
  }
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => auth && signOut(auth);
