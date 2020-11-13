import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf2DweiqqqqnIcm-kUbgysNAtjdlFI3pU",
    authDomain: "my-facebook-clone-5f470.firebaseapp.com",
    databaseURL: "https://my-facebook-clone-5f470.firebaseio.com",
    projectId: "my-facebook-clone-5f470",
    storageBucket: "my-facebook-clone-5f470.appspot.com",
    messagingSenderId: "762482110561",
    appId: "1:762482110561:web:8f1e3457778cb844643a20",
    measurementId: "G-14TE73ECSM"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider};
  export default db