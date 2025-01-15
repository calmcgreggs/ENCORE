import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function useGetUserProfile(email: string) {
  let userprofile: UserProfile | null | undefined = null;

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
    const userDoc = await getDoc(doc(db, "users", email));
    const data = userDoc.data();
    if (data) {
      userprofile = {
        UID: data["UID"],
        Initial_Score: data["Initial_Score"],
        Final_Score: data["Final_Score"],
        Progress: data["Progress"],
        Highscore: data["Highscore"],
        Mid_Score: data["Mid_Score"],
      };
    }
  }

  return userprofile;
}
