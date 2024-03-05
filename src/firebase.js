import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'admin-webapp-b0339.firebaseapp.com',
  projectId: 'admin-webapp-b0339',
  storageBucket: 'admin-webapp-b0339.appspot.com',
  messagingSenderId: '363850201480',
  appId: '1:363850201480:web:215b581863c221882ae23d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
