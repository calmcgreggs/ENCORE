import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real15({
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
        <br />A sophisticated phishing campaign targeting ICS networks has been
        identified. To safeguard our systems:
        <ul className="[&>*]:list-disc [&>*]:mt-5 mx-5">
          <li>Do not open attachments or click links from unknown sources</li>
          <li>Verify email senders before responding</li>
          <li>
            Report suspicious emails to{" "}
            <a
              href="mailto:cyber@nucletek.com"
              onClick={(e) => e.preventDefault()}
              className="underline text-blue-500"
            >
              cyber@nucletek.com
            </a>
          </li>
        </ul>
        <br />
        For details about this threat, refer to the advisory:{" "}
        <a
          href="https://nucletek.com/threat-alert"
          target="_blank"
          className="underline text-blue-500"
          onClick={(e) => e.preventDefault()}
        >
          Threat Alert
        </a>
        .
        <br />
        <br />
        Regards,
        <br />
        Nucletek Cyber Security Team
      </div>
    </div>
  );
}
