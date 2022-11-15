import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // main firebase
  // -----------------------

  // apiKey: "AIzaSyCsZ7oW9cpIJJcO_ww-aFG8ZlyvVeQ9zMU",
  // authDomain: "article-fcde4.firebaseapp.com",
  // projectId: "article-fcde4",
  // storageBucket: "article-fcde4.appspot.com",
  // messagingSenderId: "254443073699",
  // appId: "1:254443073699:web:ea07bed61b91109d25cf16",

  // sub firebase
  // -----------------------

  apiKey: "AIzaSyAHYgYckb-6OedAZuLvsHdLiGIqMncjaJQ",
  authDomain: "recipe-6b5fc.firebaseapp.com",
  projectId: "recipe-6b5fc",
  storageBucket: "recipe-6b5fc.appspot.com",
  messagingSenderId: "260232813093",
  appId: "1:260232813093:web:5b3f6c061dbc3b14c4bdcc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
