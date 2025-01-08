import { useState } from "react";
import EmailHeader from "./EmailHeader";
import FlagText from "./FlagText";

export default function Fake2({
  from,
  subject,
}: {
  from: string;
  subject: string;
}) {
  const [flagged, setFlagged] = useState(false);

  return (
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static">
      <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
        frombad
        subjectbad
        emailNo={1}
        iStart={4}
        fromcue="SimilarDomain"
        subjectcue="Urgency"
      />
      <p className="select-none">
        <FlagText
          text="Hello user,"
          flag={flagged}
          emailNo={1}
          index={0}
          cue={"ImpersonalGreeting"}
        />{" "}
        <br /> <br />
        <FlagText
          text="In order to protect your system account from fraud "
          flag={flagged}
          emailNo={1}
          index={6}
          cue="NegativeConsequences"
        />
        , we have introduced a new security key system <br />
        <br />
        <FlagText
          text="It's important you do this urntly"
          emailNo={1}
          flag={flagged}
          index={1}
          cue="SpellingError"
        />
        , As malicious actors could try and attack our systems at any minute
        <br />
        <br />
        Please{" "}
        <FlagText
          text="download this key as an attachment and install the software on
        "
          emailNo={1}
          flag={flagged}
          index={2}
          cue="Nonsense"
        />{" "}
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
        <h1 className="text-center">
          {" "}
          <FlagText
            text="SecurityKey.exe"
            emailNo={1}
            flag={flagged}
            index={3}
            cue="MaliciousAttachment"
          />
        </h1>
      </div>
    </div>
  );
}
