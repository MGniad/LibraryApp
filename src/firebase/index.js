import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAURwRJzaXEbE-uYcQST2eM3EvqbIRc8kU",
  authDomain: "libary-app-50559.firebaseapp.com",
  projectId: "libary-app-50559",
  storageBucket: "libary-app-50559.appspot.com",
  messagingSenderId: "1060529386686",
  appId: "1:1060529386686:web:f46ccc580d96446036daef",
  measurementId: "G-5EZPKTBP53",
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function reset(email) {
  return sendPasswordResetEmail(auth, email);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
export default firebase;
