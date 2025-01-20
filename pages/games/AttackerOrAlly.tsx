import { useGameContext } from "@/context/GameContext";
import {
  roundOneEmails,
  roundThreeEmails,
  roundTwoEmails,
} from "@/data/games/AttackerOrAlly";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import useUpdateHighScore from "@/hooks/useUpdateHighScore";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function AttackerOrAlly() {
  const { user } = useUser();
  const [currentEmail, setCurrentEmail] = useState(0);
  const {
    roundScores,
    round,
    setRound,
    setRoundScores,
    reflection,
    setReflection,
  } = useGameContext();
  const [cards, setCards] = useState<CardData[]>();

  const [userProfile, setUserProfile] = useState<
    UserProfile | null | undefined
  >();

  const debug = true;

  // Fisher-Yates Algorithm - From https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
  // const shuffleArray = (array: any[]) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // };

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

  function calculatePoints(emailIndex: number, round: number = 1) {
    // Spam Email - 5 Points for Identifying Email, 2 Points for Every Cue Identified
    // Genuine Email - 5 Points for Identifying Email
    let total = 0;
    let of = 0;
    let cards: CardData[] = [];
    let rscores: boolean[][] = [];
    if (round % 3 == 0) {
      cards = roundOneEmails;
    } else if (round % 3 == 1) {
      cards = roundTwoEmails;
    } else {
      cards = roundThreeEmails;
    }
    rscores = roundScores[round % 3];

    if (cards[emailIndex].spam == true) {
      if (rscores[emailIndex].includes(true)) {
        total += 5;
      }
      of += 5;
      rscores[emailIndex].forEach((each) => {
        if (each == true) {
          total += 2;
        }
        of += 2;
      });
    } else {
      if (!rscores[emailIndex].includes(true)) {
        total += 5;
      }
      of += 5;
    }
    return [total, of];
  }

  useEffect(() => {
    if (round % 3 == 2) {
      setCards(roundThreeEmails);
    } else if (round % 3 == 0) {
      setCards(roundOneEmails);
    } else {
      setCards(roundTwoEmails);
    }
  }, [round]);

  function WrapUpdateHighscore(highscoreAsPercentage: number) {
    useUpdateHighScore(
      highscoreAsPercentage,
      user!.primaryEmailAddress!.toString()
    );
  }

  useEffect(() => {
    if (round == 3) {
      const results = calculateAllRoundsTotalPoints();
      const highscoreAsPercentage = Math.round((results[0] / results[1]) * 100);
      if (
        user?.primaryEmailAddress &&
        userProfile &&
        userProfile?.Highscore < highscoreAsPercentage
      )
        WrapUpdateHighscore(highscoreAsPercentage);
    }
  }, [round]);

  function calculateTotalPoints() {
    let total = 0;
    let of = 0;
    if (roundScores && round) {
      for (let i = 0; i < roundScores[round % 3].length; i++) {
        const r = calculatePoints(i, round);
        total += r[0];
        of += r[1];
      }
    }
    return [total, of];
  }

  function calculateAllRoundsTotalPoints() {
    let total = 0;
    let of = 0;
    if (roundScores) {
      for (let ro = 0; ro < 3; ro++) {
        for (let i = 0; i < roundScores[ro % 3].length; i++) {
          const r = calculatePoints(i, ro);
          total += r[0];
          of += r[1];
        }
      }
    }
    return [total, of];
  }
  // Debugging Print Outs
  // useEffect(() => {
  //   console.log(roundScores);
  // }, [roundScores]);

  // useEffect(() => {
  //   console.log(round);
  // }, [round]);

  //Create blank arrays of cues per email for reflection and score tracking (just round 1 at the moment)
  useEffect(() => {
    const r1: boolean[][] = [];
    roundOneEmails.map((each) => {
      if (each.spam) {
        r1.push(new Array(each.cues).fill(false));
      } else {
        r1.push([]);
      }
    });
    const r2: boolean[][] = [];
    roundTwoEmails.map((each) => {
      if (each.spam) {
        r2.push(new Array(each.cues).fill(false));
      } else {
        r2.push([]);
      }
    });
    const r3: boolean[][] = [];
    roundThreeEmails.map((each) => {
      if (each.spam) {
        r3.push(new Array(each.cues).fill(false));
      } else {
        r3.push([]);
      }
    });
    setRoundScores([r1, r2, r3]);
  }, [roundOneEmails, roundTwoEmails, roundThreeEmails]);

  // Used to restart game but disabled during development. TODO : Enable this later
  // useEffect(() => {
  //   setRound(-1);
  //   setReflection(false);
  // }, []);

  //Click limiting work
  const [clicksLeft, setClicksLeft] = useState(15);

  useEffect(() => {
    setClicksLeft(15);
    setCurrentEmail(0);
  }, [round]);

  useEffect(() => {
    if (clicksLeft < 0) {
      setRound(round + 1);
    }
  }, [clicksLeft]);

  return round == -1 ? (
    <div className="p-5 bg-blue-800 text-center  gap-5 flex flex-col h-[90vh] px-20">
      <h1 className="text-2xl">Welcome to Attacker or Ally</h1>
      <h1>
        In this game, you will complete three rounds of a phishing training
        game, with each getting progressively harder. Your aim is to identify
        the phishing emails and the cues that suggest to you that the email may
        not be what it seems.
      </h1>
      <h1>
        You will have to flag clues and report phishing emails in order to
        succeed. For each round, you will have 2 minutes to deal with your
        inbox.
      </h1>
      <h1 className="text-red-300">Are You Ready?</h1>
      <button
        className="px-5 py-2 rounded-xl bg-green-700 w-fit mx-auto"
        onClick={() => setRound(0)}
      >
        Let&apos;s do it!
      </button>
    </div>
  ) : round < 3 ? (
    <div className="p-10 bg-blue-800 text-white flex flex-row h-[90vh] border border-white relative">
      <h1 className="absolute top-0 left-0 border-r px-2 border-b">
        Round {round + 1}{" "}
        {reflection ? "Reflection" : " | Clicks left - " + clicksLeft}
      </h1>
      <div className="absolute top-2 right-2">
        {!reflection && (
          <CountdownCircleTimer
            isPlaying={reflection ? false : !debug}
            onComplete={() => {
              setRound(round + 1);
              return { shouldRepeat: true, delay: 1.5 };
            }}
            size={100}
            duration={120}
            colors={["#d41133", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        )}
      </div>
      <div
        id="message-pane"
        className="w-1/4 border-r-2 border-white overflow-y-scroll no-scrollbar "
      >
        <h1 className="font-bold">Inbox</h1>
        <h1>{user?.primaryEmailAddress?.toString()}</h1>
        <div className={"[&>*]:mb-2 mt-10 mr-2 select-none"}>
          {cards &&
            cards.map((each, i) => {
              return (
                <div
                  className={
                    "rounded-xl p-2 " +
                    (reflection
                      ? each.spam
                        ? "bg-red-400"
                        : "bg-green-400"
                      : currentEmail == i
                      ? "bg-blue-500"
                      : "bg-blue-600")
                  }
                  key={i}
                  onClick={() => {
                    setCurrentEmail(i);
                  }}
                >
                  <h1 className="font-bold">{each.from}</h1>
                  <h1>{each.subject}</h1>
                </div>
              );
            })}
        </div>
      </div>
      <div
        id="email-pane"
        className="w-3/4 relative"
        onClick={() => {
          if (!debug) {
            setClicksLeft(clicksLeft - 1);
          }
        }}
      >
        {cards && cards[currentEmail].context! ? (
          <div className="absolute -bottom-2 w-2/3 mt-5 left-1/2 transform -translate-x-1/2 text-center text-white italic animate-pulse">
            <h1>{cards[currentEmail].context}</h1>
          </div>
        ) : (
          <></>
        )}
        {cards && currentEmail < cards.length ? (
          cards[currentEmail].card
        ) : (
          <div />
        )}
      </div>
      <button
        className="absolute bottom-2 right-0 bg-green-400 p-4 border-white border-2 hover:bg-green-600"
        onClick={() => {
          setRound(round + 1);
        }}
      >
        Next Round
      </button>
    </div>
  ) : (
    <div className="overflow-y-scroll no-scrollbar">
      <h1 className="text-center text-xl mt-5 font-bold">
        Round {(round % 3) + 1} Results:
      </h1>
      {roundScores[round % 3].map((each, i) => {
        return (
          <div
            className="mt-2 h-1/6 bg-blue-800 p-5 m-2 rounded-xl flex flex-row gap-5 relative"
            key={i}
          >
            <div className="w-1/4 text-center flex">
              <h1 className="font-bold my-auto mx-auto">Email {i + 1}</h1>
            </div>
            <div className="w-1/2">
              <table className="border-white border-2 mx-auto  ">
                <tr className="[&>*]:px-3">
                  <th className="text-center pl-3">Reported</th>
                  {each.map((a, index) => {
                    return (
                      <th className="pl-3 border-white border-2" key={index}>
                        Cue {index + 1}
                      </th>
                    );
                  })}
                </tr>
                <tr className="[&>*]:px-3 border-white border-2">
                  <td className="pl-3 text-center">
                    {each.includes(true) ? "Y" : "N"}
                  </td>

                  {each.map((a, index) => {
                    return (
                      <td
                        className="pl-3 text-center border-white border-2"
                        key={index}
                      >
                        {a ? "Y" : "N"}
                      </td>
                    );
                  })}
                </tr>
              </table>
            </div>
            <div className="w-1/4 text-center flex">
              <h1 className="mx-auto my-auto font-bold">
                Points - {calculatePoints(i, round).join("/")}{" "}
              </h1>
            </div>
          </div>
        );
      })}
      <div className="text-center text-xl font-bold mb-10 pt-5">
        Total Points - {calculateTotalPoints().join("/")}{" "}
      </div>
      {reflection && (
        <Link href="/dashboard">
          <button className="fixed bottom-2 left-0 bg-red-400 p-4 border-white border-2 hover:bg-green-600">
            Dashboard
          </button>
        </Link>
      )}
      <button
        className="fixed bottom-2 right-0 bg-green-400 p-4 border-white border-2 hover:bg-green-600"
        onClick={() => {
          if (round == 5) {
            setRound(0);
            setReflection(true);
          } else {
            setRound(round + 1);
          }
        }}
      >
        Next Round
      </button>
    </div>
  );
}
