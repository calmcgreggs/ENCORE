import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real4({
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
        src="/Siemens.png"
        alt="Nucletek Logo"
        width="100"
        height="100"
      />
      <p className="pointer-events-none">
        Dear {user?.firstName}, <br /> <br />
        We are pleased to announce the release of a new firmware update for the
        Simatic S7-1200. This update addresses critical vulnerabilities
        identified in CVE-2025-41783 and introduces performance enhancements,
        including: <br /> <br />
      </p>
      <ul className="list-disc px-5">
        <li>Improved latency in data polling</li>
        <li>Strengthened encryption for device-to-server communication</li>
        <li>Compatibility with updated HMI software versions</li> <br /> <br />{" "}
      </ul>
      <p>
        Steps to deploy the update: <br /> <br />
      </p>{" "}
      <ul className="list-disc px-5">
        <li> Download the firmware package from the Siemens website</li>
        <li>Review the deployment guidelines in the attached documentation.</li>
        <li>
          Test the update in a sandboxed environment before applying it to
          production systems.
        </li>
        <br /> <br />{" "}
      </ul>
      <p className="pointer-events-none">
        {" "}
        If you require assistance, our technical support team is available at
        support@siemens.com. Thank you for your continued partnership.
        <br /> <br /> Best regards,
        <br /> <br /> Ben Mackintosh
        <br /> <br /> Vendor Support Team
      </p>
    </div>
  );
}
