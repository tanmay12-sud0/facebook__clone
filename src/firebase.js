import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB2IvnXL4tXDHUCit3nvA3KXx8W8fcouUU",
    authDomain: "facebook-clone-cfca6.firebaseapp.com",
    databaseURL: "https://facebook-clone-cfca6.firebaseio.com",
    projectId: "facebook-clone-cfca6",
    storageBucket: "facebook-clone-cfca6.appspot.com",
    messagingSenderId: "902371412048",
    appId: "1:902371412048:web:eb3b6017738f61928d6955",
    measurementId: "G-MVN19X98TZ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider}
  export default db