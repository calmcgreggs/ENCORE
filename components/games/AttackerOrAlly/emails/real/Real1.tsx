import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import EmailHeader from "../../EmailHeader";
import { useState } from "react";

export default function Real1({
  from,
  subject,
  emailNo
}: {
  from: string;
  subject: string;
  emailNo : number
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
        After a recent vulnerability discovery, we&apos;ve opted as a company to
        update all of our system software. <br />
        <br />
        Please bring your laptop to the IT department by the end of the day so
        we can do this in a timely fashion.
        <br />
        <br />
        Note that we will be done by tomorrow, so there will be no downtime for
        your system. <br />
        <br />
        Thank you in advance,
        <br />
        <br /> Tim Hale <br />
        Nucletek IT Engineer <br />
      </p>
      <h1 className="text-xs font-extralight text-gray-400 mt-5">
        THIS E-MAIL AND ANY ATTACHED FILES ARE CONFIDENTIAL AND MAY BE LEGALLY
        PRIVILEGED. If you are not the addressee, any disclosure, reproduction,
        copying, distribution or other dissemination or use of this
        communication is strictly prohibited. If you have received this
        transmission in error please notify the sender immediately and then
        delete this e-mail.
      </h1>
    </div>
  );
}
