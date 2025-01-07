import Card from "@/components/games/AttackerOrAlly/EmailHeader";
import Fake1 from "@/components/games/AttackerOrAlly/Fake1";
import Fake2 from "@/components/games/AttackerOrAlly/Fake2";
import Real1 from "@/components/games/AttackerOrAlly/Real1";
import Real2 from "@/components/games/AttackerOrAlly/Real2";
import { ReactNode } from "react";



var r1: CardData[] = [];

const fake1: CardData = {
  card: (
    <Fake1
      from="british-airways@alerting-services.com"
      subject="£300 Voucher for Your Next British Airways Flight"
    />
  ),
  from: "british-airways@alerting-services.com",
  subject: "£300 Voucher for Your Next British Airways Flight",
  spam: true,
  cues: 5,
};
r1.push(fake1);

const fake2: CardData = {
  card: (
    <Fake2
      from="itdeparment@nukletech.com"
      subject="URGENT : Download New Security Key"
    />
  ),
  from: "itdeparment@nukletech.com",
  subject: "URGENT : Download New Security Key",
  spam: true,
  cues: 6,
};
r1.push(fake2);

const real1: CardData = {
  card: (
    <Real1
      from="timhale@nucletek.com"
      subject="Patch updates for all employees"
    />
  ),
  from: "timhale@nucletek.com",
  subject: "Patch updates for all employees",
  spam: false,
};
r1.push(real1);

const real2: CardData = {
  card: (
    <Real2
      from="danlindsay@nucletek.com"
      subject="Meeting Notes - Going Forward"
    />
  ),
  spam: false,
  from: "danlindsay@nucletek.com",
  subject: "Meeting Notes - Going Forward",
};
r1.push(real2);

var r2: CardData[] = [];

const fake3: CardData = {
  card: (
    <Fake1
      from="british-airways@alerting-services.com"
      subject="£300 Voucher for Your Next British Airways Flight"
    />
  ),
  from: "british-airways@alerting-services.com",
  subject: "£300 Voucher for Your Next British Airways Flight",
  spam: true,
  cues: 5,
};
r2.push(fake3);

const fake4: CardData = {
  card: (
    <Fake2
      from="itdeparment@nukletech.com"
      subject="URGENT : Download New Security Key"
    />
  ),
  from: "itdeparment@nukletech.com",
  subject: "2URGENT : Download New Security Key",
  spam: true,
  cues: 6,
};
r2.push(fake4);

const real3: CardData = {
  card: (
    <Real1
      from="timhale@nucletek.com"
      subject="Patch updates for all employees"
    />
  ),
  from: "timhale@nucletek.com",
  subject: "2Patch updates for all employees",
  spam: false,
};
r2.push(real3);

const real4: CardData = {
  card: (
    <Real2
      from="danlindsay@nucletek.com"
      subject="2Meeting Notes - Going Forward"
    />
  ),
  spam: false,
  from: "danlindsay@nucletek.com",
  subject: "Meeting Notes - Going Forward",
};
r2.push(real4);

export const roundOneEmails = r1;
export const roundTwoEmails = r2;
