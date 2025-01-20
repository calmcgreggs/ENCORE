import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real3({
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
        Please be informed that the SCADA system in the Motherwell plant will
        undergo a scheduled upgrade on 01/06/2025. <br /> <br />
        This will involve brief connectivity disruptions. <br /> <br />
        Ensure that any critical processes are adjusted accordingly and confirm
        readiness for the upgrade by 25/05/2025. <br /> <br />
        Best regards,
        <br /> <br /> Jamie Newton
        <br /> <br /> Maintenance Coordinator
      </p>
    </div>
  );
}
