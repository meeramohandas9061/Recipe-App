
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgwVcUHCbJxjjV5tV0Xk2dMnA1qR-Wn5o",
  authDomain: "recipeapp-3c892.firebaseapp.com",
  projectId: "recipeapp-3c892",
  storageBucket: "recipeapp-3c892.appspot.com",
  messagingSenderId: "878023345696",
  appId: "1:878023345696:web:babfadcf5ec50dce69de45"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};