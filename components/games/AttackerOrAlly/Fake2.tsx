import { useState } from "react";
import EmailHeader from "./EmailHeader";

export default function Fake2({
  from,
  subject,
}: {
  from: string;
  subject: string;
}) {
  const [flagged, setFlagged] = useState(false);
  return (
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 relative">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        frombad
        subjectbad
      />
      <p className="pointer-events-none">
        Hello user, <br /> <br />
        In order to protect your system account from fraud, we have introduced a
        new security key system <br />
        <br />
        It&apos;s important you do this urntly, As malicious actors could try
        and attack our systems at any minute
        <br />
        <br />
        Please download this key as an attachment and install the software on
        your computer
        <br />
        <br />
        Thank you for your cooperation,
        <br />
        <br /> The IT Department <br />
        <br />
      </p>
      <div className="w-1/2 bg-gray-500 text-white p-5 flex flex-row gap-5">
        <h1>📎</h1>
        <h1 className="text-center"> SecurityKey.exe</h1>
      </div>
    </div>
  );
}
