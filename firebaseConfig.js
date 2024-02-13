// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';  
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYifbouh0trpHdNlCnVVgVuY-qesVBNUk",
  authDomain: "newproject-6d6d1.firebaseapp.com",
  projectId: "newproject-6d6d1",
  storageBucket: "newproject-6d6d1.appspot.com",
  messagingSenderId: "712283258625",
  appId: "1:712283258625:web:d51c9c4ae4a6463ae4e500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);