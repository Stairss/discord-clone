import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4Ag_qCxtA43BaJTiGS1FX8yRWuB0qfAE",
    // authDomain: "discord-clone-b219e.firebaseapp.com",
    projectId: "discord-clone-b219e",
    storageBucket: "discord-clone-b219e.appspot.com",
    messagingSenderId: "152080203711",
    appId: "1:152080203711:web:eeb1b2ab68b2d75b662b0a",
    measurementId: "G-37C8SXRPFB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;