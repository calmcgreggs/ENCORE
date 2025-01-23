import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";
import { useUser } from "@clerk/nextjs";

export default function Real13({
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
        src="/Nucletek.png"
        alt="Nucletek Logo"
        width="150"
        height="100"
      />
      <div className="content [&>p]:mb-5">
        Dear {user?.firstName},
        <br />
        <br />
        This is a notification about the scheduled ICS Emergency Response Safety
        Drill.
        <br />
        <br />
        <strong>Date:</strong> February 20, 2025
        <br />
        <strong>Time:</strong> 10:00 AM - 12:00 PM
        <br />
        <strong>Location:</strong> All Operational Facilities
        <br />
        <br />
        During the drill, alarms will be triggered, and mock scenarios will be
        simulated to test our response protocols. Participation is mandatory for
        all relevant teams.
        <br />
        <br />
        For questions or concerns, please contact{" "}
        <a href="mailto:safety@ics.com">safety@ics.com</a>.
        <br />
        <br />
        Regards,
        <br />
        Safety Team
      </div>
    </div>
  );
}
