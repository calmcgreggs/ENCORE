import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real7({
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
      <p className="pointer-events-none">
        Attention Operators, <br /> <br />
        The pressure system in Zone 5 has exceeded the operational threshold.
      </p>{" "}
      <br />
      <ul className="list-disc px-5">
        <li>Threshold: 120 PSI</li>
        <li>Current Reading: 135 PSI</li>
        <li>Time of Breach: {new Date().toDateString()}, 04:15 AM UTC</li>
      </ul>{" "}
      <br />
      Immediate action is required to bring the system within acceptable limits
      to prevent equipment damage. Contact the monitoring team if additional
      support is needed.
      <p>
        <br /> <br />
        Regards,
        <br /> <br /> ICS Monitoring Team
      </p>
    </div>
  );
}
