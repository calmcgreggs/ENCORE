import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function Fake14({
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
        subjectcue="Urgency"
      />
      <Image
        className="mx-auto"
        src="/Nucletek.png"
        alt="Nucletek Logo"
        width="100"
        height="100"
      />
      <p>Dear {user?.firstName},</p>
      <p>
        It has come to our attention that there has been a{" "}
        <strong>potential violation</strong> of Nucletek&apos;s HR policies
        associated with your recent activity. This may include actions that go
        against our company code of conduct, confidentiality agreement, or
        acceptable workplace behavior.
      </p>
      <p>
        As part of our compliance procedures, we require you to complete the{" "}
        <strong>mandatory acknowledgment form</strong> to confirm your
        understanding of the reported issue.{" "}
        <FlagText
          text="Failure to respond within 48 hours"
          index={0}
          emailNo={emailNo}
          flag={flagged}
          cue="Urgency"
        />{" "}
        may result in{" "}
        <FlagText
          text="temporary suspension of your
        company account until further investigation is conducted."
          emailNo={emailNo}
          flag={flagged}
          index={1}
          cue="NegativeConsequences"
        />
      </p>
      <p>
        Click the link below to review the policy details and submit your
        acknowledgment:
        <br />
        <br />
        <FlagText
          flag={flagged}
          emailNo={emailNo}
          index={2}
          text="Review and Submit Acknowledgment"
          href="https://nucletek-alerts.com/HRViolation"
          cue="UnfamiliarDomain"
          link
        />
      </p>
      <p>
        If you believe this notification has been sent in error, please contact
        HR immediately at{" "}
        <FlagText
          flag={flagged}
          emailNo={emailNo}
          index={3}
          text="support@nucletek.com"
          cue="MasqueradingLink"
          href="mailto:support@nucletek-alerts.com"
          link
        />
        .
      </p>
      <p>
        Thank you for your prompt attention to this matter.
        <br />
        <strong>Nucletek HR Compliance Team</strong>
      </p>
    </div>
  );
}
