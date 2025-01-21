import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real8({
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
        src="/Siemens.png"
        alt="Nucletek Logo"
        width="150"
        height="100"
      />
      <p className="pointer-events-none">
        Dear Maintenance Team, <br /> <br />
        We have identified a critical shortage of replacement parts for Simatic
        S7-1200 PLC, which is commonly used across several key control systems.
      </p>{" "}
      <br />
      <ul className="list-disc px-5">
        <li>Available Units: 5</li>
        <li>Minimum Required Stock: 20</li>
        <li>Expected Restock Date: February 15th, 2025</li>
      </ul>{" "}
      <br />
      The shortage may delay scheduled repairs and maintenance activities if
      current stock is depleted. Systems reliant on the PLC may face extended
      downtime in case of failures. <br /> <br />
      Please assess your immediate needs and place orders accordingly. Delays
      may affect ongoing repairs. Contact inventory@siemens.com for assistance.
      <p>
        <br /> <br />
        Best regards,
        <br /> <br /> Siemens Inventory Management Team
      </p>
    </div>
  );
}
