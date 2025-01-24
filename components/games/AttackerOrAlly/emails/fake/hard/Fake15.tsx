import { useState } from "react";
import EmailHeader from "../../../EmailHeader";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function Fake15({
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
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Image
          src="/Linkedin.png"
          alt="LinkedIn Logo"
          width={50}
          height={50}
          className="w-full h-28 mx-auto bg-blue-500/50 py-10 object-contain "
        />
      </div>
      <h2 style={{ color: "#0073b1", fontSize: "18px", textAlign: "center" }}>
        New Connection Request
      </h2>
      <p style={{ fontSize: "16px", color: "#333333" }}>
        Hi {user?.firstName},
      </p>
      <p style={{ fontSize: "16px", color: "#333333" }}>
        <strong>John Smith</strong> has sent you a connection request on
        LinkedIn. Connect with John and expand your professional network to stay
        updated with the latest opportunities.
      </p>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <a
          href="http://linkedin-connection-verify.com/connect"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#0073b1",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Accept Request
        </a>
      </div>
      <p style={{ fontSize: "16px", color: "#333333" }}>
        Thank you for being part of the LinkedIn community.
      </p>

      <p style={{ fontSize: "16px", color: "#333333" }}>The Linkedin Team.</p>
      <hr style={{ margin: "20px 0", border: "0.5px solid #e0e0e0" }} />
      <p
        style={{
          fontSize: "12px",
          color: "#999999",
          textAlign: "center",
        }}
      >
        © 2025 LinkedIn Corporation, 1000 W Maude Ave, Sunnyvale, CA 94085, USA
      </p>
    </div>
  );
}
