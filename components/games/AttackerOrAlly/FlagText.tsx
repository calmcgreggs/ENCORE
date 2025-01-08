import { useGameContext } from "@/context/GameContext";
import { useEffect, useState } from "react";
import ReflectionModal from "./ReflectionModal";

export default function FlagText({
  text,
  style,
  flag,
  index,
  emailNo,
  cue,
}: {
  text: string;
  style?: string;
  flag: boolean;
  index: number;
  emailNo: number;
  cue?: CueType;
}) {
  const {
    roundScores,
    setRoundScores,
    round,
    reflection,
    setReflectionModalOpen,
    setCueNo,
  } = useGameContext();
  const [found, setFound] = useState(false);

  useEffect(() => {
    setFound(roundScores[round][emailNo][index]);
  }, [round, roundScores, emailNo, index]);

  return (
    <>
      <ReflectionModal cue={cue} found={found} index={index} />
      <a
        className={
          (style ? style : "") +
          " text-wrap transition-all ease-in-out duration-500 " +
          (reflection
            ? "underline decoration-wavy " +
              (found ? "decoration-green-700" : "decoration-red-700")
            : found
            ? "bg-red-700 text-white"
            : "")
        }
        onClick={() => {
          if (reflection) {
            setReflectionModalOpen(true);
            setCueNo(index);
          } else if (flag) {
            setRoundScores(
              roundScores.map((roundScore, roundNo) => {
                if (roundNo != round) {
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
        // onMouseOver={() => {
        //   if (reflection) {
        //     setReflectionModalOpen(true);
        //   }
        // }}
        // onMouseOut={() => {
        //   if (reflection) {
        //     setReflectionModalOpen(false);
        //   }
        // }}
      >
        {text}
      </a>
    </>
  );
}
