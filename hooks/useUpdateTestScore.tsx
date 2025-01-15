import { initializeApp } from "firebase/app";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export default async function useUpdateTestScore(
  score: number,
  email: string,
  type: "Initial" | "Mid" | "Final"
) {
  const firebaseConfig = {
    apiKey: "AIzaSyD5kJ1uPo6EJwpaUYUt_5hXbnylwV7UkHY",
    authDomain: "encore-802db.firebaseapp.com",
    projectId: "encore-802db",
    storageBucket: "encore-802db.appspot.com",
    messagingSenderId: "404905758726",
    appId: "1:404905758726:web:97c8f97985031816df7387",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  if (db && email) {
    if (type == "Initial") {
      await updateDoc(doc(db, "users", email), {
        Initial_Score: score,
      });
    } else if (type == "Mid") {
      await updateDoc(doc(db, "users", email), {
        Mid_Score: score,
      });
    } else {
      await updateDoc(doc(db, "users", email), {
        Final_Score: score,
      });
    }
  }
  return null;
}
