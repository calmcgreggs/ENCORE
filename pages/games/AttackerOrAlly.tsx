import { useGameContext } from "@/context/GameContext";
import cards from "@/data/games/AttackerOrAlly";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function AttackerOrAlly() {
  const { user } = useUser();
  const [currentEmail, setCurrentEmail] = useState(0);
  const [round, setRound] = useState(0);
  const { setRoundOne } = useGameContext();

  // useEffect(() => {
  //   console.log(roundOne);
  // }, [roundOne]);

  //Create blank arrays of cues per email for reflection and score tracking (just round 1 at the moment)
  useEffect(() => {
    const r1: boolean[][] = [];
    cards.map((each) => {
      if (each.spam) {
        r1.push(new Array(each.cues).fill(false));
      } else {
        r1.push([]);
      }
    });
    setRoundOne(r1);
  }, [cards]);

  return round == 0 ? (
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
        onClick={() => setRound(1)}
      >
        Let&apos;s do it!
      </button>
    </div>
  ) : round < 4 ? (
    <div className="p-10 bg-blue-800 text-white flex flex-row h-[90vh] border border-white relative">
      <h1 className="absolute top-0 left-0 border-r px-2 border-b">
        Round {round}
      </h1>
      <div className="absolute top-2 right-2">
        <CountdownCircleTimer
          isPlaying={false}
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
      </div>
      <div id="message-pane" className="w-1/4 border-r-2 border-white ">
        <h1 className="font-bold">Inbox</h1>
        <h1>{user?.primaryEmailAddress?.toString()}</h1>
        <div className={"[&>*]:mb-2 mt-10 mr-2 select-none"}>
          {cards.map((each, i) => {
            return (
              <div
                className={
                  "rounded-xl p-2 " +
                  (currentEmail == i ? "bg-blue-500" : "bg-blue-600")
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
      <div id="email-pane" className="w-3/4">
        {currentEmail < cards.length ? cards[currentEmail].card : <div />}
      </div>
    </div>
  ) : (
    <h1>Game Over</h1>
  );
}
