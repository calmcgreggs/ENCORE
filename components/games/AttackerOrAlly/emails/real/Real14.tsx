import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real14({
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
        Dear Team,
        <br />
        <br />
        The system performance report for January 2025 is now available. Key
        metrics include:
        <br /> <br />
        <ul>
          <li>
            <strong>Uptime:</strong> 99.98%
          </li>
          <li>
            <strong>Average Response Time:</strong> 120ms
          </li>
          <li>
            <strong>Critical Errors Logged:</strong> 2
          </li>
        </ul>
        <br />
        Detailed reports can be downloaded from the following link:{" "}
        <a
          href="https://nucletek.com/reports/jan2025"
          target="_blank"
          onClick={(e) => e.preventDefault()}
          className="underline text-blue-500"
        >
          January Performance Report
        </a>
        .
        <br />
        <br />
        If you have any questions or require further analysis, please contact{" "}
        <a
          href="mailto:reports@nucletek.com"
          onClick={(e) => e.preventDefault()}
          className="text-blue-500 underline"
        >
          reports@nucletek.com
        </a>
        .
        <br />
        <br />
        Regards,
        <br />
        Reporting Team
      </div>
    </div>
  );
}
