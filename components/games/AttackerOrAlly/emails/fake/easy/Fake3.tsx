import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";

export default function Fake3({
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
        
      />
      {/* <Image
        className="mx-auto"
        src="/fake1.png"
        alt="BA Logo"
        width="300"
        height="100"
      /> */}
      <p className="select-none">
        <FlagText
          text="Dear User,"
          cue="ImpersonalGreeting"
          emailNo={emailNo}
          flag={flagged}
          index={0}
        />{" "}
        <br />
        <br /> Our recent vulnerability scan has revealed critical security
        flaws in your SCADA software version 4.2.1.{" "}
        <FlagText
          text="If not patched, these flaws
        may result in unauthorized access to sensitive operational data."
          emailNo={emailNo}
          index={2}
          flag={flagged}
          cue="NegativeConsequences"
        />{" "}
        <br />
        <br /> To protect your system, download and install the latest update
        using the link below::
        <br />
        <br />
        <FlagText
          href="https://www.suspicious-scada-update.com/download"
          text="Update Now"
          cue="UnfamiliarURL"
          emailNo={emailNo}
          index={1}
          flag={flagged}
          link
        />
        <br />
        <br />
        <FlagText
          text="Please complete this update before 5 PM today to ensure uninterrupted
        system operations. Failure to comply may result in escalated security
        incidents."
          emailNo={emailNo}
          index={3}
          flag={flagged}
          cue="Urgency"
        />
        <br />
        <br />
        If you have questions, contact us immediately at{" "}
        <FlagText
          text="support@criticalupdates-systems.com"
          emailNo={emailNo}
          index={4}
          flag={flagged}
          link
          href="mailto:support@criticalupdates-systems.com"
          cue="UnfamiliarDomain"
        />{" "}
        <br />
        <br />
        Regards,
        <br />
        <br /> IT Support
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
