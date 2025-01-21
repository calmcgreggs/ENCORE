import { useGameContext } from "@/context/GameContext";
import { useEffect, useState } from "react";
import ReflectionModal from "./ReflectionModal";

export default function FlagText({
  text,
  flag,
  index,
  emailNo,
  cue,
  href,
  link,
  nonsensegood,
  nonsensebad,
}: {
  text: string;
  flag: boolean;
  index: number;
  emailNo: number;
  cue?: CueType;
  href?: string;
  link?: boolean;
  nonsensegood?: string;
  nonsensebad?: string;
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
    if (index && round && emailNo && roundScores)
      setFound(roundScores[round][emailNo][index]);
  }, [roundScores, emailNo, index]);

  return (
    <>
      <ReflectionModal
        cue={cue}
        found={found}
        index={index}
        nonsensebad={nonsensebad}
        nonsensegood={nonsensegood}
      />
      <a
        className={
          (link ? "underline text-blue-500" : "") +
          " text-wrap transition-all ease-in-out duration-500 " +
          (reflection
            ? "underline decoration-wavy " +
              (found ? "decoration-green-700" : "decoration-red-700")
            : found
            ? "!bg-red-700 !text-white"
            : "")
        }
        onClick={(e) => {
          console.log(roundScores);
          e.preventDefault();
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
        href={link ? href : undefined}
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
