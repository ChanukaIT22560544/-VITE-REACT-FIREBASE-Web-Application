// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-P4tDVmHO-h8Bk9GyGwOdhz6kA9kfqco",
  authDomain: "cnk-bg-remover.firebaseapp.com",
  projectId: "cnk-bg-remover",
  storageBucket: "cnk-bg-remover.appspot.com",
  messagingSenderId: "279894390231",
  appId: "1:279894390231:web:9fec44e6fe2088bbee0792",
  measurementId: "G-G0GMM336W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };