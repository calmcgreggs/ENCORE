import { useGameContext } from "@/context/GameContext";
import { useEffect, useState } from "react";

export default function FlagText({
  text,
  style,
  flag,
  index,
  emailNo,
}: {
  text: string;
  style?: string;
  flag: boolean;
  index: number;
  emailNo: number;
}) {
  const { roundScores, setRoundScores, round } = useGameContext();
  const [found, setFound] = useState(false);

  useEffect(() => {
    setFound(roundScores[round - 1][emailNo][index]);
  });
  return (
    <a
      className={
        style! +
        " transition-all ease-in-out duration-500 " +
        (found ? "bg-red-700 text-white" : "")
      }
      onClick={() => {
        if (flag) {
          setRoundScores(
            roundScores.map((roundScore, roundNo) => {
              if (roundNo != round - 1) {
                return roundScore;
              } else {
                return roundScore.map((email, ei) => {
                  if (ei == emailNo) {
                    return email.map((each, i) => {
                      if (i == index) {
                        return !found;
                      } else {
                        return each;
                      }
                    });
                  } else {
                    return email;
                  }
                });
              }
            })
          );
          setFound(!found);
        }
      }}
    >
      {text}
    </a>
  );
}
