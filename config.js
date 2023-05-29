import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDuQvEDwQVgmvn8NmgCIGhQgUQoXzw9fnw",
  authDomain: "projetinho-9e34a.firebaseapp.com",
  projectId: "projetinho-9e34a",
  storageBucket: "projetinho-9e34a.appspot.com",
  messagingSenderId: "376828686208",
  appId: "1:376828686208:web:954104e444d51e1bda9b65"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
