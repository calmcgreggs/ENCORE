import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";

export default function Fake6({
  from,
  subject,
  emailNo,
}: {
  from: string;
  subject: string;
  emailNo: number;
}) {
  const [flagged, setFlagged] = useState(false);
  const { user } = useUser();

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
        iStart={4}
        fromcue="UnfamiliarDomain"
        subjectcue="Nonsense"
      />
      <p className="select-none">
        Dear {user?.firstName}, <br /> <br />
        A critical firmware update has been released for{" "}
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={3}
          text="PLC Model X300 to
        address recently identified vulnerabilities"
          cue="Generic"
        />
        . This update improves system stability and enhances security. <br />{" "}
        <br />
        Download the firmware and installation guide{"  "}
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={0}
          text="here"
          cue="UnfamiliarURL"
          link
          href="https://automationpatch-updates.com/download-X300"
        />
        <br /> <br />
        <FlagText
          emailNo={emailNo}
          text={"Ensure the update is applied by " + new Date().toDateString()}
          cue="Urgency"
          flag={flagged}
          index={1}
        />{" "}
        to prevent{" "}
        <FlagText
          emailNo={emailNo}
          text="potential
        security breaches"
          index={2}
          cue="NegativeConsequences"
          flag={flagged}
        />
        . Contact our support team if you need assistance.
        <br /> <br />
        Regards, <br /> <br />
        Automation Support Team
      </p>
    </div>
  );
}
