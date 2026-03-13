import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXDZVpNYZWKPIpjYNrdlu_mh7R3k42sMk",
  authDomain: "notification-c0a2c.firebaseapp.com",
  databaseURL: "https://notification-c0a2c-default-rtdb.firebaseio.com",
  projectId: "notification-c0a2c",
  storageBucket: "notification-c0a2c.firebasestorage.app",
  messagingSenderId: "8802883750",
  appId: "1:8802883750:web:7b1c9f8c3b64227353fc67",
  measurementId: "G-JR4K03441R",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Analytics initialization (client-side only)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
