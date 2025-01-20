import Image from "next/image";
import { useState } from "react";
// import EmailHeader from "../../../EmailHeader";
// import FlagText from "../../../FlagText";

export default function Template({
  from,
  subject,
}: {
  from: string;
  subject: string;
}) {
  const [flagged, setFlagged] = useState(false);

  return (
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static">
      {/* <EmailHeader
        from={from}
        subject={subject}
        flagged={flagged}
        setFlagged={setFlagged}
      /> */}
      {/* <Image
        className="mx-auto"
        src="/fake1.png"
        alt="BA Logo"
        width="300"
        height="100"
      /> */}
      <p className="select-none">
        {/*  
        
        Email Body
        */}
      </p>
      {/* <h1 className="text-xs font-extralight text-gray-400">
        Disclaimer: The £300 voucher is transferable to another British Airways
        Executive Club member but is not redeemable for cash. The voucher must
        be used within the validity period stated and can only be applied toward
        British Airways flights. Any unused balance will not be refunded. Terms
        and conditions apply.
      </h1> */}
    </div>
  );
}
