// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0PhWtmeduRBrsRusNL7AZ-p70ZFdYAZk",
  authDomain: "job-portal-75bbc.firebaseapp.com",
  projectId: "job-portal-75bbc",
  storageBucket: "job-portal-75bbc.appspot.com",
  messagingSenderId: "734195513865",
  appId: "1:734195513865:web:dc6bac9c247c8e22fa16d8",
  measurementId: "G-W2473V31FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;