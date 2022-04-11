import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzFhrsyYLyKBlueTHELu3mUN_mjHS4t_o",
  authDomain: "undangan-fef44.firebaseapp.com",
  databaseURL: "https://undangan-fef44-default-rtdb.firebaseio.com",
  projectId: "undangan-fef44",
  storageBucket: "undangan-fef44.appspot.com",
  messagingSenderId: "30800753351",
  appId: "1:30800753351:web:38cdc35538e202003684e2",
  measurementId: "G-01KDW9TV9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
