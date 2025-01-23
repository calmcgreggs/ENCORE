import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../../EmailHeader";

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
        iStart={4}
        fromcue="UnfamiliarDomain"
        subjectcue="PositiveConsequences"
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
          <p>Hello Calum,</p> <br />
          <p>
            You have been invited to join a Zoom meeting on{" "}
            {new Date().toLocaleDateString()} at 4pm. <br /> <br />
            Meeting ID: 556 469 3945 <br /> Passcode: 87256674
          </p>
          <button className="bg-blue-500 text-white p-2 w-1/4 my-5">
            Join Meeting
          </button>
          <p>
            If the button above does not work for you, copy and paste this link
            to your browser address bar and try again. <br />
          </p>
          <br />
          <a href="" className="">
            LINK TEXT
          </a>
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
