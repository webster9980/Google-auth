import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' 


const firebaseConfig = {
  apiKey: "AIzaSyAlDTdUQhIm-TGXwFkPvIEum8asf1XRE4c",
  authDomain: "auth-wt.firebaseapp.com",
  projectId: "auth-wt",
  storageBucket: "auth-wt.appspot.com",
  messagingSenderId: "728172978804",
  appId: "1:728172978804:web:67c9d4583cba589e53e721"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)