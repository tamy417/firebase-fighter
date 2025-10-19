// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkFY2vhJTRNmzr5Mb0U6KIu8CIzdYZ0eo",
  authDomain: "fir-fighter-451e6.firebaseapp.com",
  projectId: "fir-fighter-451e6",
  storageBucket: "fir-fighter-451e6.firebasestorage.app",
  messagingSenderId: "862763947301",
  appId: "1:862763947301:web:29ea88ff9f6713fd2bb6cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
