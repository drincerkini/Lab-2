// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator,onAuthStateChanged } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTHSruOSfm2R0z4GHMh0XdhJ1JEMPBDyk",
  authDomain: "vuevuexfirebaseauth.firebaseapp.com",
  projectId: "vuevuexfirebaseauth",
  storageBucket: "vuevuexfirebaseauth.appspot.com",
  messagingSenderId: "458798238257",
  appId: "1:458798238257:web:c63c446bf8da1b4d8ee310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), async (user) => {
  if (user) {
    const tokenResult = user
      ? await getAuth().currentUser.getIdTokenResult()
      : { claims: null };
    this.$store.dispatch("userModule/fetchUser", {
      user,
      claims: tokenResult.claims,
    });
  }
});
connectAuthEmulator(getAuth(), "http://127.0.0.1:9099");
connectFunctionsEmulator(getFunctions(), "http://127.0.0.1:5001");

export default app;
