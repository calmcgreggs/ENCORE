import Image from "next/image";
import TestEmailHeader from "../../TestEmailHeader";

export default function TestFake1({
  from,
  subject,
}: {
  from: string;
  subject: string;
}) {

  return (
    <div className="bg-white w-3/4 h-[90%] flex flex-col text-black rounded-xl mx-auto p-4 overflow-y-scroll transition-all ease-in-out duration-500 static">
      <TestEmailHeader
        from={from}
        subject={subject}

      />
      <Image
        className="mx-auto"
        src="/fake1.png"
        alt="BA Logo"
        width="300"
        height="100"
      />
      <p className="select-none">
        Hi there,
        <br /> <br />
        We hope this message finds you well. <br />
        <br />
        We are pleased to inform you that a £300 British Airways travel voucher
        has been issued to you, which can be used on any of our future flights.
        This voucher has been provided following a recent flight change that did
        not meet our usual high standards. After a review by the Civil Aviation
        Authority (CAA), it was determined that the notice provided fell short
        of the expected minimum level. <br />
        <br />
        To make things right, we&#39;ve issued this voucher, which you can use
        for your next British Airways booking. You will find the voucher
        attached to this email. Alternatively, you can download it directly from
        your British Airways account by logging in
        here:https://accounts.br1ttishairways.com/flight-credit/login
        <br />
        <br />
        The voucher can be redeemed easily online or through our customer
        service team. <br />
        <br />
        Thank you for your understanding, and we look forward to welcoming you
        on board again soon. <br />
        <br />
        Warm regards,
        <br />
        <br /> The British Airways Team <br />
        <br />
      </p>
      <h1 className="text-xs font-extralight text-gray-400">
        Disclaimer: The £300 voucher is transferable to another British Airways
        Executive Club member but is not redeemable for cash. The voucher must
        be used within the validity period stated and can only be applied toward
        British Airways flights. Any unused balance will not be refunded. Terms
        and conditions apply.
      </h1>
    </div>
  );
}
