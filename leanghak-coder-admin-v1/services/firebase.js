import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// import "firebase/compat/analytics"

// For Firebase JS SDK v9.8.4 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7eGzW9ZuYXeuCu00APfryiI8o21j13Vw",
    authDomain: "leanghak-coder.firebaseapp.com",
    projectId: "leanghak-coder",
    storageBucket: "leanghak-coder.appspot.com",
    messagingSenderId: "862053063866",
    appId: "1:862053063866:web:575d4cac31b3de4d5ef683",
    measurementId: "G-JGF5CXXJPV"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const fireStore = firebase.firestore();// database
const fireStorage = firebase.storage();
const fireAuth = firebase.auth();
// const fireAnalytic= firebase.analytics();

export {
    fireStore,// Database
    fireStorage,// storage
    fireAuth, // authentication 
    // fireAnalytic//  analytics
}

// Server Side Rendering (SSR)

//JS => REACTJS => NextJS

