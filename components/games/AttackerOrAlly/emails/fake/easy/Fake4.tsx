import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";
import { useUser } from "@clerk/nextjs";

export default function Fake4({
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
        subjectcue="NegativeConsequences"
        fromcue="UnfamiliarDomain"
        emailNo={emailNo}
        iStart={4}
      />
      {/* <Image
        className="mx-auto"
        src="/fake1.png"
        alt="BA Logo"
        width="300"
        height="100"
      /> */}
      <p className="select-none">
        Hello {user?.firstName} <br /> <br />
        As part of our ongoing efforts to improve cybersecurity, all ICS team
        members must complete the mandatory training program &quot;Securing ICS
        in 2025.&quot; This training covers:{" "}
      </p>
      <ul className="[&>*]:list-disc px-5 [&>*]:py-2">
        <li>Identifying threats to SCADA systems</li>
        <li>Best practices for protecting PLCs and RTUs</li>
        <li>Avoiding phishing attacks targeting ICS professionals</li>
      </ul>
      <br />
      <p className="select-none">
        Access the training module{" "}
        <FlagText
          href="https://www.awarenesstrainingicsmandatory.net"
          text="here"
          cue="UnfamiliarURL"
          emailNo={emailNo}
          index={0}
          flag={flagged}
          link
        />
        <br />
        <br />{" "}
        <FlagText
          text={"Deadline: " + new Date().toDateString()}
          emailNo={emailNo}
          index={1}
          flag={flagged}
          cue="Urgency"
        />
        .{" "}
        <FlagText
          text="Failure to complete the training may result in temporary suspension of
        your account."
          emailNo={emailNo}
          index={2}
          flag={flagged}
          cue="NegativeConsequences"
        />
        <br />
        <br />
        For assistance, contact us at{" "}
        <FlagText
          text="helpdesk@secure-awareness-training.com"
          emailNo={emailNo}
          index={3}
          flag={flagged}
          link
          href="mailto:helpdesk@secure-awareness-training.com"
          cue="UnfamiliarDomain"
        />{" "}
        <br />
        <br />
        Regards,
        <br />
        <br /> Security Awareness Team
      </p>
      {/* <h1 className="text-xs font-extralight text-gray-400">
        Disclaimer: The £300 voucher is transferable to another British Airways
        Executive Club member but is not redeemable for cash. The voucher must
        be used within the validity period stated and can only be applied toward
        British Airways flights. Any unused balance will not be refunded. Terms
        and conditions apply.
      </h1> */}
    </div>
  );
}
