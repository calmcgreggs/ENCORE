import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real6({
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
        src="/ScottishWater.png"
        alt="Nucletek Logo"
        width="300"
        height="100"
      />
      <p className="pointer-events-none">
        Hello Operations Team, <br /> <br />
        Please find attached the weekly performance metrics for the water
        distribution control system. Key highlights are as follows:
      </p>{" "}
      <br />
      <ul className="list-disc px-5">
        <li>Average Pump Efficiency: 92.7%</li>
        <li>Flow Rate Consistency: Within acceptable thresholds (±3%)</li>
        <li>Alerts Triggered: 4 minor alerts, no critical issues</li>
      </ul>{" "}
      <br />
      We recommend reviewing the Zone 3 pump efficiency, which has shown a
      slight decrease compared to the previous week. Further investigation may
      be required.
      <p>
        <br />
        Please let us know if you have any concerns or require additional data.
        <br /> <br />
        Best regards,
        <br /> <br /> Operations Team
      </p>
    </div>
  );
}
