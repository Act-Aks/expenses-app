import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.FirebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.FirebaseAuthDomain,
  projectId: Constants.expoConfig?.extra?.FirebaseProjectId,
  storageBucket: Constants.expoConfig?.extra?.FirebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.FirebaseMessagingSenderId,
  appId: Constants.expoConfig?.extra?.FirebaseAppId,
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

// Auth Firebase
// const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

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
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type CreateUserWithEmailAndPassword,
  type SignInWithEmailAndPassword,
};
