import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAdhGnhgqEHXgX6W_RlGMY1DvQexlR32bU",
  authDomain: "pro-f8f4c.firebaseapp.com",
  projectId: "pro-f8f4c",
  storageBucket: "pro-f8f4c.appspot.com",
  messagingSenderId: "37877161300",
  appId: "1:37877161300:web:2fc7033f2cb8a719a2bcc1"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

