// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nu_2tzDKF6dKzb4veZlAQf99tAzdHaY",
  authDomain: "movie-app-e6ad2.firebaseapp.com",
  projectId: "movie-app-e6ad2",
  storageBucket: "movie-app-e6ad2.appspot.com",
  messagingSenderId: "79035620878",
  appId: "1:79035620878:web:64b0c50f7bc4a1ff0ee65f",
  measurementId: "G-TR8ZMVZ1VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getStorage(app);