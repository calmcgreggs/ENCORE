import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export default async function useGetAllGameData() {
  let gameresults: Game_Result[] = [];

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

  if (db) {
    const querySnapshot = await getDocs(collection(db, "game_results"));
    querySnapshot.forEach((userDoc) => {
      const data = userDoc.data();
      if (data && data["GameTime"] != -1) {
        gameresults.push({
          ID: userDoc.id,
          GameTime: data["GameTime"],
        });
      }
    });
  }

  return gameresults;
}
