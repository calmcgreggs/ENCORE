import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real11({
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
        <p>Dear Team,</p>
        <p>
          Please note the following shift change for operators in the{" "}
          <strong>Central Control Room</strong>:
        </p>
        <p>
          <strong>Effective Date:</strong> {new Date().toDateString()}
        </p>
        <p>
          <strong>New Schedule:</strong>
        </p>
        <ul>
          <li>Shift A: 6:00 AM - 2:00 PM</li>
          <li>Shift B: 2:00 PM - 10:00 PM</li>
          <li>Shift C: 10:00 PM - 6:00 AM</li>
        </ul>
        <p>
          <br />
          Ensure all teams are informed of the updated schedule. For queries,
          contact{" "}
          <a
            href="mailto:hr@nucletek.com"
            className="underline text-blue-500"
            onClick={(e) => e.preventDefault()}
          >
            hr@nucletek.com
          </a>
          .
          <br />
          <br />
          Best, <br /> <br />
          David Thomas <br />
          HR Team
        </p>
      </div>
    </div>
  );
}
