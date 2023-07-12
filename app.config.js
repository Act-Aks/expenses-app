import 'dotenv/config';

export default {
  expo: {
    name: 'ExpensesApp',
    slug: 'ExpensesApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      FirebaseApiKey: process.env.FIREBASE_API_KEY,
      FirebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      FirebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      FirebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      FirebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FirebaseAppId: process.env.FIREBASE_APP_ID,
    },
  },
};
