import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";

export default function Fake5({
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
        subjectcue="Urgency"
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
        <FlagText
          text={"Hi there,"}
          emailNo={emailNo}
          index={0}
          flag={flagged}
          cue="ImpersonalGreeting"
        />
        <br /> <br />
        We have detected abnormal behavior in PLC unit 2341 connected to your
        network. <br /> <br />
        <FlagText
          text="This may impact real-time operations if not resolved promptly."
          emailNo={emailNo}
          index={1}
          flag={flagged}
          cue="NegativeConsequences"
        />
        <br />
        <br />
        Please review the attached diagnostic report and provide your
        recommendations.
        <br />
        <br />
        <FlagText
          text="For immediate assistance, call our support team at +353 855 552 301."
          emailNo={emailNo}
          index={2}
          flag={flagged}
          cue="FurtherContact"
        />
        <br />
        <br />
        Regards,
        <br />
        <br /> Technical Support
      </p>
      <div className="w-1/2 bg-gray-500 text-white p-5 flex flex-row gap-5 mt-5">
        <h1>📎</h1>
        <h1 className="text-center">
          {" "}
          <FlagText
            text="ReportDetails.exe"
            emailNo={emailNo}
            flag={flagged}
            index={3}
            cue="MaliciousAttachment"
          />
        </h1>
      </div>
    </div>
  );
}
