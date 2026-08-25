// Cloudinary Configuration (ಫೋಟೋ ಅಪ್‌ಲೋಡ್‌ಗೆ)
var CLOUDINARY_CLOUD_NAME = "mkuurlzy";
var CLOUDINARY_UPLOAD_PRESET = "samruddhi";

// Firebase Configuration (ನಿಮ್ಮ ನಿಖರವಾದ ಕೀಗಳು)
var firebaseConfig = {
  apiKey: "AIzaSyCuAqvEpWRa1PK8zEig0K1iBYkNrWoQ560",
  authDomain: "samruddhi-fee93.firebaseapp.com",
  projectId: "samruddhi-fee93",
  storageBucket: "samruddhi-fee93.firebasestorage.app",
  messagingSenderId: "363327696798",
  appId: "1:363327696798:web:6fd462149814c1a679f08f",
  measurementId: "G-90CQLHR34H"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // ಗ್ಲೋಬಲ್ ಡೇಟಾಬೇಸ್ ಆಬ್ಜೆಕ್ಟ್ (ಎಲ್ಲಾ ಪೇಜ್‌ಗಳಿಗೂ ಲಭ್ಯವಾಗುವಂತೆ)
  window.db = firebase.firestore();
  var db = window.db;
} else {
  console.error("Firebase SDK ಲೋಡ್ ಆಗಿಲ್ಲ. ದಯವಿಟ್ಟು ನೆಟ್‌ವರ್ಕ್ ಪರಿಶೀಲಿಸಿ.");
}