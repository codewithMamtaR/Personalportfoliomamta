

// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBt2GT2TQJYsamCmdgnVHWGKoBa_Oxtq28",
    authDomain: "my-portfolio-3cdea.firebaseapp.com",
    projectId: "my-portfolio-3cdea",
    storageBucket: "my-portfolio-3cdea.firebasestorage.app",
    messagingSenderId: "653450695625",
    appId: "1:653450695625:web:c6fdd2fc2b87dc6dd64e18"
  };
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);