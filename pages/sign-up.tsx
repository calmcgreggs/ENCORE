import { useUser } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignUp() {
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

  const { user } = useUser();

  const router = useRouter();
  useEffect(() => {
    createUserInFirebase();
  }, [user?.primaryEmailAddress]);

  async function createUserInFirebase() {
    if (user?.primaryEmailAddress)
      await setDoc(doc(db, "users", user.primaryEmailAddress.toString()), {
        Final_Score: -1,
        Highscore: -1,
        Initial_Score: -1,
        Progress: 0,
        UID: user.primaryEmailAddress.toString(),
        Mid_Score: -1,
      })
        .then(() => {
          router.push("/dashboard");
        })
        .catch(() => {
          router.push("/");
        });
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
      <h1 className="text-3xl">Setting up your account...</h1>
      <progress className="progress w-full mt-10"></progress>
    </div>
  );
}
