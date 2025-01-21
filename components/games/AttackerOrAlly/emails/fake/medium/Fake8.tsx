import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";
import { useUser } from "@clerk/nextjs";

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
  const {user} = useUser()

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
        iStart={2}
        fromcue="UnfamiliarDomain"
        subjectcue="Urgency"
      />
      <p className="select-none">
        Dear {user?.firstName},
        <br /> <br />
        You are invited to an exclusive webinar hosted by industry leaders on
        protecting ICS infrastructure from the latest cybersecurity threats.
        <br />
        Topics include:
        <br /> <br />
        <ul className="list-disc px-5">
          <li>Threat mitigation for SCADA systems</li>
          <li>Real-time monitoring best practices</li>
          <li>Case studies from recent ICS incidents</li>
        </ul>
        <br /> <br />
        Reserve your spot now {" "}
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={0}
          text="here"
          cue="UnfamiliarURL"
          link
          href="https://www.ics-insights-webinar.com/register"
        />
        <br /> <br />
        <FlagText
          emailNo={emailNo}
          text={"Only a limited number of seats are available, so act quickly!"}
          cue="Urgency"
          flag={flagged}
          index={1}
        />{" "}
        <br /> <br />
        Regards, <br /> <br />
        ICS Insights Team
      </p>
    </div>
  );
}
