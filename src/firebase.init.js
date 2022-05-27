// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJMLeVzyJQKgpO0O6lYukXYH4wwsEmPs",
  authDomain: "volunteer-network-dc539.firebaseapp.com",
  projectId: "volunteer-network-dc539",
  storageBucket: "volunteer-network-dc539.appspot.com",
  messagingSenderId: "262477250294",
  appId: "1:262477250294:web:60a2f6cdf1e461972cb6d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;