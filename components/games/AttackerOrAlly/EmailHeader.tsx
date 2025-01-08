import { useGameContext } from "@/context/GameContext";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import FlagText from "./FlagText";

export default function EmailHeader({
  from,
  subject,
  flagged,
  setFlagged,
  emailNo,
  iStart,
  frombad,
  subjectbad,
  fromcue,
  subjectcue,
}: {
  from: string;
  subject: string;
  flagged: boolean;
  emailNo?: number;
  iStart?: number;
  setFlagged: Dispatch<SetStateAction<boolean>>;
  frombad?: boolean;
  subjectbad?: boolean;
  fromcue?: CueType;
  subjectcue?: CueType;
}) {
  const [hydrated, setHydrated] = useState(false);
  const { roundScores, round, reflection } = useGameContext();

  useEffect(() => {
    setHydrated(true);
  }, []);

  //This was an attempt to persist the report mode but no joy yet (this needs to work!)
  useEffect(() => {
    if (roundScores[round][emailNo!].includes(true)) {
      setFlagged(true);
    }
  }, [emailNo, round]);

  return (
    <div className="">
      {!reflection && (
        <div className="relative">
          <div
            id="report-flag"
            className="absolute top-4 right-4 transition-all ease-in-out duration-500"
          >
            {flagged ? (
              <CiFlag1
                className="bg-red-500 w-10 h-10"
                onClick={() => setFlagged(!flagged)}
              />
            ) : (
              <CiFlag1
                className="w-10 h-10"
                onClick={() => setFlagged(!flagged)}
              />
            )}
          </div>
        </div>
      )}
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">From : </h1>
        {frombad && fromcue ? (
          <FlagText
            flag={flagged}
            text={from}
            index={iStart!}
            emailNo={emailNo!}
            cue={fromcue}
          />
        ) : (
          <h1>{from}</h1>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">Subject : </h1>
        {subjectbad && subjectcue ? (
          <FlagText
            flag={flagged}
            text={subject}
            emailNo={emailNo!}
            index={iStart! + 1}
            cue={subjectcue}
          />
        ) : (
          <h1>{subject}</h1>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">Received : </h1>
        <Suspense key={hydrated ? "local" : "gmt"}>
          <h1>{new Date().toString()}</h1>
        </Suspense>
      </div>
    </div>
  );
}
