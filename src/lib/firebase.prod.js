import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJ1E7c1d8i6aYDmvdwH5KrgOSfUijZK6c",
  authDomain: "netflix-clone-26b5c.firebaseapp.com",
  databaseURL: "https://netflix-clone-26b5c.firebaseio.com",
  projectId: "netflix-clone-26b5c",
  storageBucket: "netflix-clone-26b5c.appspot.com",
  messagingSenderId: "906738998856",
  appId: "1:906738998856:web:e9468da357a92440e0827d",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
