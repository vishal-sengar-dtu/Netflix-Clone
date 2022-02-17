import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed.js";

const config = {
  apiKey: "AIzaSyD2RNXLtXd4eVyaGx0hgFyg9tNkVJDVlfo",
  authDomain: "netflix-clone-ba764.firebaseapp.com",
  projectId: "netflix-clone-ba764",
  storageBucket: "netflix-clone-ba764.appspot.com",
  messagingSenderId: "579504807177",
  appId: "1:579504807177:web:f0a3b6feb6c0c4791fc7d8"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
