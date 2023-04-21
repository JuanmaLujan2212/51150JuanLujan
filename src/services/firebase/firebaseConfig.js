import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP1sAyKBS92t1Uh_Dn9CGEH4dhai9Zkpo",
  authDomain: "coderhouse-ecommerce-9ae24.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9ae24",
  storageBucket: "coderhouse-ecommerce-9ae24.appspot.com",
  messagingSenderId: "111303663817",
  appId: "1:111303663817:web:e9362c9bbf21196312ed18",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
