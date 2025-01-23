import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../../EmailHeader";

export default function Fake11({
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
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static [&>p]:mb-5 [&>p]:select-none">
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
      <Image
        src="/Microsoft365.png"
        alt="Microsoft Logo"
        width={150}
        height={200}
      />
      <h1 className="text-blue-600 mb-10 text-4xl font-sans">
        Unusual sign in activity
      </h1>
      <p>
        Hello {user?.firstName}, <br />
        <br />
        We&apos;ve detected unusual activity on your Microsoft account. To ensure the
        security of your account, please reset your password immediately.
      </p>
      <p>
        <strong>Details:</strong>
        <ul>
          <li>Date: {new Date().toLocaleDateString()}</li>
          <li>Location: Unknown (IP: 82.128.7.20)</li>
        </ul>
      </p>
      <p>
        To secure your account, click the link below and follow the instructions
        to reset your password:
      </p>
      <a
        href="#"
        className="inline-block bg-[#0078D4] text-white py-2 rounded-xl text-center mb-10 w-1/4"
      >
        Reset Password
      </a>
      <p>
        If you did not request this, please contact our support team at
        passwordreset@microsoftemail.com.
      </p>
      <p>
        Thanks, <br />
        The Microsoft account team
      </p>
    </div>
  );
}
