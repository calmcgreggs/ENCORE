import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";

export default function Fake12({
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
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        frombad
        emailNo={emailNo}
        iStart={2}
        fromcue="UnfamiliarDomain"
      />
      <div className="relative [&>p]:mb-5 [&>p]:select-none pt-16">
        <Image
          src="/Nucletek.png"
          alt="Microsoft Logo"
          width={100}
          height={200}
          className="absolute right-1/2 top-0 transform translate-x-1/2"
        />
        <p className="mt-5">
          Dear {user?.firstName}, <br /> <br />
          As we continue to adjust to hybrid work schedules, we value your input
          on our workplace policies. Please take a moment to provide your
          feedback through the form linked below.
        </p>
        <p>
          Your feedback is crucial in helping us create a safe and productive
          environment for all employees. Click the link below to access the
          feedback form:
        </p>
        <button className="inline-block bg-green-700 text-white px-2 py-4 rounded-xl mb-5 text-center w-1/4">
          <FlagText
            text="Provide Feedback"
            emailNo={emailNo}
            flag={flagged}
            index={0}
            href="https://nuckletek.com/feedback"
            cue="MasqueradingLink"
          />
        </button>
        <p>
          The survey will take approximately 5 minutes to complete. Thank you
          for your time and cooperation.
        </p>
        <p>
          If you have any questions, please contact the return to office team at{" "}
          <FlagText
            emailNo={emailNo}
            index={1}
            cue="MasqueradingLink"
            flag={flagged}
            text="officereturn@nucletek.com"
            href="mailto:officereturn@nuckletek.com"
            link
          />
        </p>
        <p>
          Best, <br /> <br /> James Watt <br /> Nucletek CEO
        </p>
      </div>
    </div>
  );
}
