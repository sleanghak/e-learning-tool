import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/analytics"
// For Firebase JS SDK v9.8.4 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq3TZnG_oTqyBZOyaRAxF_ACOx-w5aqbk",
    authDomain: "agriculture-97580.firebaseapp.com",
    projectId: "agriculture-97580",
    storageBucket: "agriculture-97580.appspot.com",
    messagingSenderId: "178558751492",
    appId: "1:178558751492:web:1fa54cc45cf66613ddb651",
    measurementId: "G-JEZJY6VM66"
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

