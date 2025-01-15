import { useUser } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { doc, Firestore, getDoc, getFirestore } from "firebase/firestore";
import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";

import { SetStateAction } from "react";

type FirebaseContext = {
  userProfile: UserProfile | null | undefined;
  setUserProfile: Dispatch<
    SetStateAction<UserProfile | null | undefined>
  > | null;
  db: Firestore | null;
};

const FirebaseContext = createContext<FirebaseContext>({
  userProfile: null,
  db: null,
  setUserProfile: null,
});

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

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<
    UserProfile | null | undefined
  >(null);
  const { isSignedIn, user } = useUser();
  async function getUserProfile() {
    if (user?.primaryEmailAddress) {
      console.log("Username Found");
      const userDoc = await getDoc(
        doc(db, "users", user?.primaryEmailAddress.toString())
      );
      const data = userDoc.data();
      if (data) {
        setUserProfile({
          UID: data["UID"],
          Initial_Score: data["Initial_Score"],
          Final_Score: data["Final_Score"],
          Progress: data["Progress"],
          Highscore: data["Highscore"] as number,
          Mid_Score: data["Mid_Score"],
        });
      }
    } else {
      alert("Username not found");
      return null;
    }
  }

  useEffect(() => {
    if (isSignedIn) {
      getUserProfile();
    }
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        userProfile: userProfile,
        setUserProfile: setUserProfile,
        db: db,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
