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

  function resetPercentages() {
    var empty: number[] = [];
    empty.fill(0, 0, gameCards.length - 1);
    setPercentages(empty);
    setCurrentPercentage(50);
  }

  useEffect(() => {
    setGameCards(gameCards.toSorted(() => Math.random() - 0.5));
    resetPercentages;
  }, [cards]);

  const [cardIndex, setCardIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [percentages, setPercentages] = useState<number[]>([]);
  const [currentPercentage, setCurrentPercentage] = useState(50);

  return (
    <div className="relative overflow-hidden ease-in-out transition-all duration-200 ">
      {!gameStarted ? (
        <div className="text-center gap-5 flex flex-col mt-10">
          <h1 className="text-3xl font-bold">Welcome to Attacker or Ally!</h1>
          <h1>
            You work for NucleTek, a Nuclear Research Lab. You will be shown 10
            sample emails and how genuine or malicious you think they are.
          </h1>
          <h1>You can use your mouse to drag the slider to your answer.</h1>
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
        <div className="flex flex-col w-screen h-[90vh] pt-5 ">
          <h1 className="bg-black w-fit p-2 absolute left-2 top-2">
            Score : {correct}
          </h1>
          <div className="h-5/6">
            {cardIndex < gameCards.length && gameCards[cardIndex].card}
          </div>
          <div className="flex flex-row">
            <h1 className="text-3xl my-auto ml-20 font-bold text-red-700 animate-pulse">
              Spam
            </h1>
            <div className="w-1/2 mx-auto my-auto transition-all ease-in-out duration-1000">
              <input
                type="range"
                min={0}
                max="100"
                step="10"
                value={currentPercentage}
                onPointerUp={() => {
                  //Possibly add some logic here to collect data (A/B?) on average scores or run some type of regression
                  if (
                    currentPercentage < 50 &&
                    gameCards[cardIndex].spam == true
                  ) {
                    setCorrect(correct + 1);
                  } else if (
                    currentPercentage > 50 &&
                    gameCards[cardIndex].spam == false
                  ) {
                    setCorrect(correct + 1);
                  }

                  if (cardIndex < gameCards.length - 1) {
                    setCardIndex(cardIndex + 1);
                  } else {
                    setGameOver(true);
                  }
                  setCurrentPercentage(50);
                }}
                onChange={(e) => {
                  setCurrentPercentage(parseInt(e.target.value));
                  var copy = percentages;
                  copy[cardIndex] = parseInt(e.target.value);
                  setPercentages(copy);
                }}
                className="range range-primary "
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <h1 className="text-3xl my-auto mr-20 font-bold text-green-700 animate-pulse">
              Genuine
            </h1>
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
              resetPercentages();
            }}
          >
            Retry Game
          </button>
        </div>
      )}
    </div>
  );
}
