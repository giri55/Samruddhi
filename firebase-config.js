const firebaseConfig = {
  apiKey: "AIzaSyCuAqvEpWRa1PK8zEig0K1iBYkNrWoQ560",
  authDomain: "samruddhi-fee93.firebaseapp.com",
  projectId: "samruddhi-fee93",
  storageBucket: "samruddhi-fee93.firebasestorage.app",
  messagingSenderId: "363327696798",
  appId: "1:363327696798:web:6fd462149814c1a679f08f",
  measurementId: "G-90CQLHR34H"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const db = firebase.firestore();
const CLOUDINARY_CLOUD_NAME = "mkuurlzy";
const CLOUDINARY_UPLOAD_PRESET = "samruddhi";