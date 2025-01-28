import { initializeApp } from "firebase/app";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export default async function useSetGameTime(
  GameTime: number,
  email: string
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
    await updateDoc(doc(db, "game_results", email), {
      FastestTime: GameTime,
    });
  }
  return null;
}
