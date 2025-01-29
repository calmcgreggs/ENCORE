import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real12({
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
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 relative">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        emailNo={emailNo}
      />
      <Image
        className="mx-auto"
        src="/Nucletek.png"
        alt="Nucletek Logo"
        width="150"
        height="100"
      />
      <div className="content [&>p]:mb-5">
        Hello all,
        <br />
        <br />
        We are experiencing unplanned downtime affecting the ICS Data Logging
        Platform. Our engineers are actively investigating the issue.
        <br />
        <br />
        <strong>Issue Details:</strong>
        <br />- <strong>Start Time:</strong> {new Date().toLocaleDateString()},
        10:00 AM UTC
        <br />- <strong>Estimated Resolution Time:</strong> To Be Determined
        <br />
        <br />
        We will provide updates as we work to resolve the issue. If you
        encounter critical operational challenges, please reach out to{" "}
        <a
          href="mailto:monitoring@nucletek.com"
          onClick={(e) => e.preventDefault()}
          className="text-blue-500 underline"
        >
          monitoring@nucletek.com
        </a>
        .
        <br />
        <br />
        Thank you for your patience.
        <br />
        <br />
        Regards,
        <br />
        Nucletek Monitoring Team
      </div>
    </div>
  );
}
