// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyD3z9MChvD-Xp5t61VGYFnjjhWSqoS3nfk",
//     authDomain: "todo-293b3.firebaseapp.com",
//     databaseURL: "https://todo-293b3.firebaseio.com",
//     projectId: "todo-293b3",
//     storageBucket: "todo-293b3.appspot.com",
//     messagingSenderId: "228763494938",
//     appId: "1:228763494938:web:eb242345c85199b899ffa3",
//     measurementId: "G-7M0Y9M8WFF"
//   };

  import firebase from "firebase"; 

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3z9MChvD-Xp5t61VGYFnjjhWSqoS3nfk",
    authDomain: "todo-293b3.firebaseapp.com",
    databaseURL: "https://todo-293b3.firebaseio.com",
    projectId: "todo-293b3",
    storageBucket: "todo-293b3.appspot.com",
    messagingSenderId: "228763494938",
    appId: "1:228763494938:web:eb242345c85199b899ffa3",
    measurementId: "G-7M0Y9M8WFF"
  });

  const db = firebaseApp.firestore();

  export default db;