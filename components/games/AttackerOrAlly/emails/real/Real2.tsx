import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";

export default function Real2({
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
        Just sending over our notes from the meeting earlier. <br />
        <br />
        If you could look at these in the next couple of days and see if there
        is anything we can do to improve our PLC security that would be great.
        <br />
        <br />
        Cheers,
        <br />
        <br /> Dan Lindsay <br /> Nucletek Executive <br />
      </p>
      <div className="w-1/2 bg-blue-500 text-white p-5 flex flex-col gap-5 mt-5">
        <div className="flex flex-row gap-2">
          <h1>📎</h1>
          <h1 className="text-center">Meeting Notes.docx</h1>
        </div>
        <hr />
        <div className="text-white flex flex-row">
          <h1>Virus-free courtesy of</h1>{" "}
          <h1 className="text-blue-700 ml-2 underline">avast.com</h1>
        </div>
      </div>
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
