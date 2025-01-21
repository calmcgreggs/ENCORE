import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";


export default function Fake9({
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
        iStart={5}
        fromcue="UnfamiliarDomain"
        subjectcue="NegativeConsequences"
      />
      <FlagText
        text="Dear Network Administrator,"
        emailNo={emailNo}
        flag={flagged}
        index={0}
        cue="ImpersonalGreeting"
      />
      <p>
        Our automated monitoring system detected unusual traffic patterns in
        your ICS network on January 15, 2025. A potential breach{" "}
        <FlagText
          text=" involving external IP [192.168.0.1] has been flagged."
          emailNo={emailNo}
          cue="Nonsense"
          flag={flagged}
          index={1}
          nonsensebad="This IP address is a internal IP address, and the attacker has clearly tried to use technical language to confuse the recipient"
          nonsensegood="Well Done! You spotted that the technical jargon in this sentence did not make sense!"
        />
      </p>
      <p>
        Review the full report and recommended actions by accessing your
        dashboard:
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={2}
          text="Access Dashboard"
          cue="MasqueradingLink"
          href="http://networksecurityy-portal.co.uk/login"
          link
        />
      </p>
      <p>
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={3}
          text=" It is critical to address this issue within 24 hours "
          cue="Urgency"
        />
        to avoid further risks. If you need assistance, please reply to this
        email or{" "}
        <FlagText
          emailNo={emailNo}
          flag={flagged}
          index={4}
          text="  call us at +1-800-SUSPICIOUS. "
          cue="Nonsense"
          nonsensebad="Phone numbers in emails will most often be registered in the country that a company is from, however, this is a US number."
          nonsensegood="Well Done! You recognised that the phone number is not in the country that this company is associated with"
        />{" "}
      </p>
      <p>
        Regards,
        <br />
        Cybersecurity Operations
      </p>
    </div>
  );
}
