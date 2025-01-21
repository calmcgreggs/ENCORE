import Image from "next/image";
import { useState } from "react";
import EmailHeader from "../../EmailHeader";
import { useUser } from "@clerk/nextjs";

export default function Real10({
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
        src="/GIAC.jpg"
        alt="Nucletek Logo"
        width="300"
        height="100"
      />
      <div className="content [&>p]:mb-5">
        <p>Dear {user?.firstName},</p>
        <p>
          Congratulations on completing the{" "}
          <strong>GIAC Cloud Security Essentials</strong> training!
        </p>
        <p>
          You can download your certificate by clicking the link below to login
          to your account:
        </p>
        <p>
          <a
            href="https://giac.org/login"
            onClick={(e) => e.preventDefault()}
            className="underline text-blue-500"
          >
            Download Certificate
          </a>
        </p>
        <p>
          If you have any questions, please contact us at{" "}
          <a href="mailto:info@icsacademy.com">info@giac.org</a>.
        </p>
      </div>
      <div className="footer">&copy; 2025 GIAC. All rights reserved.</div>
    </div>
  );
}
