import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";
import { useUser } from "@clerk/nextjs";

export default function Real9({
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
        src="/ICSLearn.png"
        alt="Nucletek Logo"
        width="150"
        height="100"
      />
      <p className="pointer-events-none">
        Hi {user?.firstName}, <br /> <br />
        I&apos;d like to thank you for attending our recent training session on
        Advanced SCADA Operations and Security Protocols. Your feedback is
        critical in helping improve future sessions. <br /> <br />
        What to Include in Feedback:
      </p>{" "}
      <br />
      <ul className="list-disc px-5">
        <li>Were the topics covered in sufficient detail?</li>
        <li>
          Did the practical exercises align with your operational challenges?
        </li>
        <li>Suggestions for additional topics or improvements?</li>
      </ul>{" "}
      <br />
      <p>
        Feedback Form:
        <a
          href="https://forms.microsoft.com/dpQ24mnw"
          onClick={(e) => e.preventDefault()}
          className="underline text-blue-500"
        >
          Provide Feedback Here
        </a>
        <br /> <br />
        Thank you for taking the time to share your thoughts. For further
        questions, contact <a href="mailto:feedback@icslearn.co.uk" className="text-blue-500 underline" onClick={(e) => e.preventDefault()}>feedback@icslearn.co.uk.</a> <br /> <br />
        Best Regards,
        <br /> <br /> Dan Simpson
        <br />  Seminar Leader at ICS Learn
      </p>
    </div>
  );
}
