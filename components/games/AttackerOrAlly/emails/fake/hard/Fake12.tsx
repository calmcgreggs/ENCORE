import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";


export default function Fake12({
  from,
  subject,
  emailNo,
}: {
  from: string;
  subject: string;
  emailNo: number;
}) {
  const [flagged, setFlagged] = useState(false);


  return (
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static [&>p]:mb-10 [&>p]:select-none">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        frombad
        subjectbad
        emailNo={emailNo}
        iStart={4}
        fromcue="UnfamiliarDomain"
        subjectcue="PositiveConsequences"
      />
      <p>
        <FlagText
          text="Dear Professional,"
          emailNo={emailNo}
          flag={flagged}
          index={0}
          cue="ImpersonalGreeting"
        />
      </p>
      <p>
        Gain access to the latest in ICS monitoring technology with{" "}
        <FlagText
          text=" our premium software—now available for a free trial"
          index={1}
          flag={flagged}
          emailNo={emailNo}
          cue="PositiveConsequences"
        />
        . Our tool provides real-time alerts, improved analytics, and robust
        security for your industrial systems.
      </p>
      <p>
        Start your free trial today by clicking below: <br /> <br />
        <FlagText
          text="Start Free Trial"
          index={2}
          flag={flagged}
          emailNo={emailNo}
          link
          href="http://freemonitorics-software.com/start-trial"
          cue="UnfamiliarURL"
        />
      </p>
      <p>
        <FlagText
          text="Hurry! Offer expires soon."
          emailNo={emailNo}
          flag={flagged}
          index={3}
          cue="Urgency"
        />{" "}
        No payment details required for trial activation.
      </p>
      <p>
        Best Regards,
        <br />
        ICS Monitoring Team
      </p>
    </div>
  );
}
