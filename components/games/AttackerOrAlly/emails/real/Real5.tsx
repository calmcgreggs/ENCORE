import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real5({
  from,
  subject,
  emailNo,
}: {
  from: string;
  subject: string;
  emailNo: number;
}) {
  const [flagged, setFlagged] = useState(false);
  const user = useUser();

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
        width="100"
        height="100"
      />
      <p className="pointer-events-none">
        Hi {user.user?.firstName}, <br /> <br />
        The automated monitoring system has detected a critical issue affecting
        PLC communication in Site 2. This failure was recorded on{" "}
        {new Date().toDateString()} at 15:13 and has caused the following
        disruptions:
      </p>{" "}
      <br />
      <ul className="list-disc px-5">
        <li>
          Sensor data from Line 5 is not being received by the SCADA system
        </li>
        <li>Automated control sequences are failing to initiate</li>
      </ul>{" "}
      <br />
      Immediate actions recommended:
      <ul className="list-disc px-5 pt-5">
        <li>Verify the status of the affected PLCs</li>
        <li>Check network connectivity between PLCs and the SCADA server.</li>
        <li>Restart the affected devices if no hardware issues are found.</li>
      </ul>
      <p>
        <br />
        An incident ticket has been automatically created (#67890). Please
        update the ticket with your findings and resolution steps. If the issue
        persists, escalate to the Level 2 Support Team.
        <br /> <br />
        Thank you for your prompt attention to this matter. <br /> <br />
        Best regards,
        <br /> <br /> Automated Monitoring System
      </p>
    </div>
  );
}
