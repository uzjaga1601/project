import { initializeApp  } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB85Mp9HVvpotV7UD4Mv-pmQv-7BKnpgYI",
    authDomain: "database-58b47.firebaseapp.com",
    projectId: "database-58b47",
    storageBucket: "database-58b47.appspot.com",
    messagingSenderId: "570706744105",
    appId: "1:570706744105:web:4dc3b24b7979f08a7c5d38"
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  export {db}