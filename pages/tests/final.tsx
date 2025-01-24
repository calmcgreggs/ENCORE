import { testEmails } from "@/data/games/AttackerOrAlly";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import useUpdateTestScore from "@/hooks/useUpdateTestScore";
import { useUser } from "@clerk/nextjs";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FinalTest() {
  const [gameCards, setGameCards] = useState<CardData[]>(testEmails);

  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const controls = useAnimationControls();

  useEffect(() => {
    setGameCards(gameCards.toSorted(() => Math.random() - 0.5));
  }, [testEmails]);

  const handleReject = (drag?: boolean) => {
    if (drag == false) {
      controls.start({
        x: -500,
        transition: { duration: 0.5 },
        transitionEnd: { x: 0, animationDuration: "1.5s" },
      });
    }

    if (gameCards[cardIndex].spam == true) {
      setCorrect(correct + 1);
    }
    if (cardIndex < gameCards.length - 1) {
      setTimeout(() => setCardIndex(cardIndex + 1), 500);
    } else {
      setGameOver(true);
    }
  };

  const { user } = useUser();

  const [userProfile, setUserProfile] = useState<
    UserProfile | null | undefined
  >();

  async function GetPF() {
    if (user?.primaryEmailAddress?.toString()) {
      setUserProfile(
        // eslint-disable-next-line
        await useGetUserProfile(user.primaryEmailAddress.toString())
      );
    }
  }

  useEffect(() => {
    GetPF();
  }, [user]);

  useEffect(() => {
    if (
      gameOver == true &&
      user?.primaryEmailAddress &&
      userProfile &&
      userProfile.Final_Score == -1
    ) {
      // eslint-disable-next-line
      useUpdateTestScore(
        (correct / gameCards.length) * 100,
        user?.primaryEmailAddress.toString(),
        "Final"
      );
    }
  }, [gameOver, user, userProfile]);

  //Resets game on refresh
  useEffect(() => {
    setGameStarted(false);
    setGameOver(false);
  }, []);

  const handleAccept = (drag?: boolean) => {
    if (drag == false) {
      controls.start({
        x: 500,
        transition: { duration: 0.5 },
        transitionEnd: { x: 0, animationDuration: "1.5s" },
      });
    }

    if (gameCards[cardIndex].spam == false) {
      setCorrect(correct + 1);
    }
    if (cardIndex < gameCards.length - 1) {
      setTimeout(() => setCardIndex(cardIndex + 1), 500);
    } else {
      setGameOver(true);
    }
  };
  const x = useMotionValue(0);
  const input = [-300, 0, 300];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);
  const [cardIndex, setCardIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  return (
    <div className="relative overflow-hidden ease-in-out transition-all duration-200 ">
      {!gameStarted ? (
        <div className="text-center gap-5 flex flex-col mt-10">
          <h1 className="text-3xl font-bold">
            Welcome to the Final Evaluation Test!
          </h1>
          <h1>
            You work for NucleTek, a Nuclear Research Lab. You will be shown 10
            sample emails and you need to choose whether they are genuine or
            malicious.
          </h1>
          <h1>
            You can use your mouse to drag each email to the appropriate heading
            or you can just click on the heading itself
          </h1>
          <h1 className="text-red-600">Good luck!</h1>
          <button
            className="btn btn-success w-fit mx-auto mt-10"
            onClick={() => {
              setGameStarted(true);
            }}
          >
            Start Game
          </button>
        </div>
      ) : !gameOver ? (
        <div className="flex flex-row w-screen h-[90vh] pt-5">
          <h1 className="bg-black w-fit p-2 absolute left-2 top-2">
            Score : {correct}
          </h1>
          <div
            className="my-auto text-3xl mx-auto bg-red-600 w-fit h-2/3 text- p-4 rounded-xl animate-pulse flex"
            onClick={() => handleReject(false)}
          >
            <h1 className="my-auto">Spam</h1>
          </div>
          <motion.div
            className="w-3/4"
            drag={"x"}
            dragConstraints={{
              left: -200,
              right: 200,
            }}
            dragElastic={0}
            dragSnapToOrigin
            style={{ x, opacity }}
            animate={controls}
            onDragEnd={(event, info) => {
              if (info.point.x > 700) {
                handleAccept(true);
              } else if (info.point.x < 700) {
                handleReject(true);
              }
            }}
          >
            {cardIndex < gameCards.length && gameCards[cardIndex].card}
          </motion.div>
          <div
            className="my-auto text-3xl mx-auto bg-green-600 w-fit h-2/3 text- p-4 rounded-xl animate-pulse flex"
            onClick={() => handleAccept(false)}
          >
            <h1 className="my-auto">Genuine</h1>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-3xl w-1/2 text-center mx-auto font-bold">
            Congratulations on completing the post-evaluation test. The final
            part of this evaluation is an anonymous user survey that will be
            used to gain insights into your opinions of the game and the
            platform.
          </h1>
          <h1 className="text-xl mt-10">
            You achieved a score of {correct}/{gameCards.length}
          </h1>
          <Link href="/form">
            <button className="p-5 bg-green-700 rounded-xl hover:bg-green-600">
              Complete User Form
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
