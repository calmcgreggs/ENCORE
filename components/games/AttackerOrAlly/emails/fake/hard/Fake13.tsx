import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import FlagText from "../../../FlagText";
import { useUser } from "@clerk/nextjs";

export default function Fake13({
  from,
  subject,
  emailNo,
}: {
  from: string;
  subject: string;
  emailNo: number;
}) {
  const [flagged, setFlagged] = useState(false);
  const {user} = useUser()

  return (
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static [&>p]:mb-10 [&>p]:select-none">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        frombad
        subjectbad
        emailNo={emailNo}
        iStart={2}
        fromcue="UnfamiliarDomain"
        subjectcue="Urgency"
      />
      <div className="flex w-full h-full bg-gray-100 flex-col py-5 ">
        <Image
          src="/Zoom.png"
          alt="Zoom Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="bg-white m-5 py-5 px-5">
          <p>Hello {user?.firstName},</p> <br />
          <p>
            You have been invited to join a Zoom meeting on{" "}
            {new Date().toLocaleDateString()} at 4pm. <br /> <br />
            Meeting ID: 556 469 3945 <br /> Passcode: 87256674
          </p>
          <button className="bg-blue-500 text-white p-2 w-1/4 my-5">
            <FlagText text="Join Meeting" cue="Nonsense" emailNo={emailNo} flag={flagged} index={0} nonsensebad="This attack used a non-interactive button so that user's would click on the link below." nonsensegood="Well Done! You spotted the disabled button leading users to click on the malicious link below!" />
          </button>
          <p>
            If the button above does not work for you, copy and paste this link
            to your browser address bar and try again. <br />
          </p>
          <br />
          <FlagText text="https://zoom.host/j/5164693225?pwd=OWVgUW0waVBROEhYdjZtNmYzMDRVZz09&omn=87607556218" href="https://zoom.host/j/5164693225?pwd=OWVgUW0waVBROEhYdjZtNmYzMDRVZz09&omn=87607556218" link emailNo={emailNo} flag={flagged} index={1} cue="UnfamiliarURL" />
          <p className="mt-5">
            Thank you for choosing Zoom, <br /> - The Zoom Team{" "}
          </p>
          <hr className="mt-5 mx-5" />
          <div className="footer mt-5 flex flex-col text-center [&>*]:mx-auto">
            <p className="text-gray-400">
              &copy; 2025 Zoom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
