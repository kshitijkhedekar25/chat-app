import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCid4c8yYRxxvc4cjdZSGtW-bVZWA4gsp4',
  authDomain: 'chat-web-app-6f433.firebaseapp.com',
  projectId: 'chat-web-app-6f433',
  storageBucket: 'chat-web-app-6f433.appspot.com',
  messagingSenderId: '110630580037',
  appId: '1:110630580037:web:a2ac8a3e02c9b4225fd82c',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
