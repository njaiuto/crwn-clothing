import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-76dc7.firebaseapp.com",
  projectId: "crwn-clothing-76dc7",
  storageBucket: "crwn-clothing-76dc7.appspot.com",
  messagingSenderId: "612709532539",
  appId: "1:612709532539:web:80a06bebc25e5a90a173de"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
