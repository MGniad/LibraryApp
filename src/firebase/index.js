import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAURwRJzaXEbE-uYcQST2eM3EvqbIRc8kU",
    authDomain: "libary-app-50559.firebaseapp.com",
    projectId: "libary-app-50559",
    storageBucket: "libary-app-50559.appspot.com",
    messagingSenderId: "1060529386686",
    appId: "1:1060529386686:web:f46ccc580d96446036daef",
    measurementId: "G-5EZPKTBP53"
};

firebase.initializeApp(firebaseConfig)

export default firebase