import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRE_API_KEY,
    authDomain: import.meta.env.VITE_FIRE_AUTH_DOM,
    projectId: import.meta.env.VITE_FIRE_PRJ_ID,
    storageBucket: import.meta.env.VITE_FIRE_STG_BKT,
    messagingSenderId: import.meta.env.VITE_FIRE_MSG_ID,
    appId: import.meta.env.VITE_FIRE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // co a firestore
export const auth = getAuth(app); // co a l'authent