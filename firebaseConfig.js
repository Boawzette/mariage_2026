// Import de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <== important pour l’auth

// Configuration de ton projet
const firebaseConfig = {
  apiKey: "AIzaSyDlj8Ke-C9jJGqiBSeDHx-oXZBUbV2d36o",
  authDomain: "mariage-anais-louis.firebaseapp.com",
  projectId: "mariage-anais-louis",
  storageBucket: "mariage-anais-louis.firebasestorage.app",
  messagingSenderId: "1084105955838",
  appId: "1:1084105955838:web:b2d07943ecc19096a2c8af"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Configure l’authentification
export const auth = getAuth(app);
