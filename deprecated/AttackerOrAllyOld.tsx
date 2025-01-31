import { ReactNode, useEffect, useState } from "react";
import cards from "@/data/games/AttackerOrAlly";
import Link from "next/link";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function AttackerOrAlly() {
  type CardData = {
    card: ReactNode;
    spam: boolean;
  };

  const [gameCards, setGameCards] = useState<CardData[]>(cards);

  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const controls = useAnimationControls();

  useEffect(() => {
    setGameCards(gameCards.toSorted(() => Math.random() - 0.5));
  }, [cards]);

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
      setCardIndex(cardIndex + 1);
    } else {
      setGameOver(true);
    }
  };

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
      setCardIndex(cardIndex + 1);
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
          <h1 className="text-3xl font-bold">Welcome to Attacker or Ally!</h1>
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
        <div className="text-center">
          <h1 className="font-bold text-5xl text-center mt-10">Game Over!</h1>
          <h1 className="text-xl mt-10">
            You achieved a score of {correct}/{gameCards.length}
          </h1>
          <Link href="/dashboard">
            <button className="btn btn-primary mt-10 mx-10">
              Back to Dashboard
            </button>
          </Link>
          <button
            className="btn btn-secondary mt-10 mx-10"
            onClick={() => {
              setGameCards(gameCards.toSorted(() => Math.random() - 0.5));
              setCardIndex(0);
              setCorrect(0);
              setGameOver(false);
            }}
          >
            Retry Game
          </button>
        </div>
      )}
    </div>
  );
}
