import Constants from 'expo-constants';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.FirebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.FirebaseAuthDomain,
  projectId: Constants.expoConfig?.extra?.FirebaseProjectId,
  storageBucket: Constants.expoConfig?.extra?.FirebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.FirebaseMessagingSenderId,
  appId: Constants.expoConfig?.extra?.FirebaseAppId,
};

// Initialize Firebase
const FIREBASE_APP =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// Auth Firebase
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Firebase Data
const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);

type SignInWithEmailAndPassword = typeof signInWithEmailAndPassword;
type CreateUserWithEmailAndPassword = typeof createUserWithEmailAndPassword;

export {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_DB,
  createUserWithEmailAndPassword,
  doc,
  onAuthStateChanged,
  setDoc,
  signInWithEmailAndPassword,
  type CreateUserWithEmailAndPassword,
  type SignInWithEmailAndPassword,
};
