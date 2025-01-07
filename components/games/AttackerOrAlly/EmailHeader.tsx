import {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useState,
} from "react";
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
}: {
  from: string;
  subject: string;
  flagged: boolean;
  emailNo?: number;
  iStart?: number;
  setFlagged: Dispatch<SetStateAction<boolean>>;
  frombad?: boolean;
  subjectbad?: boolean;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div>
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
          <CiFlag1 className="w-10 h-10" onClick={() => setFlagged(!flagged)} />
        )}
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">From : </h1>
        {frombad && iStart && emailNo ? (
          <FlagText
            flag={flagged}
            text={from}
            index={iStart}
            emailNo={emailNo}
          />
        ) : (
          <h1>{from}</h1>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">Subject : </h1>
        {subjectbad && emailNo && iStart ? (
          <FlagText
            flag={flagged}
            text={subject}
            emailNo={emailNo}
            index={iStart + 1}
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
