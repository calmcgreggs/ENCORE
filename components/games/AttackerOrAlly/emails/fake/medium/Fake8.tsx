import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";

export default function Fake8({
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
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        frombad
        subjectbad
        emailNo={emailNo}
        iStart={5}
        fromcue="UnfamiliarDomain"
        subjectcue="Nonsense"
      />
      <p className="select-none">
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={0}
          text="Dear Facility Manager,"
          cue="ImpersonalGreeting"
        />
        <br /> <br />
        We have identified a{" "}
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={1}
          text="manufacturing defect in the ICS Controller Model 789"
          cue="Generic"
        />
        that may lead to operational failures under high load conditions. <br />{" "}
        <br />
        For safety, all affected units must be replaced immediately. Submit your
        replacement request here:{"  "}
        <br /> <br />
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={2}
          text="https://controller-recall.com/replace789"
          cue="UnfamiliarURL"
          link
          href="https://controller-recall.com/replace789"
        />
        <br /> <br />
        <FlagText
          emailNo={emailNo}
          text={"Failure to act promptly  "}
          cue="Urgency"
          flag={flagged}
          index={3}
        />{" "}
        may result in{" "}
        <FlagText
          emailNo={emailNo}
          text="unplanned downtime and potential safety risks"
          index={4}
          cue="NegativeConsequences"
          flag={flagged}
        />
        .
        <br /> <br />
        Regards, <br /> <br />
        Recall Notification
      </p>
    </div>
  );
}
