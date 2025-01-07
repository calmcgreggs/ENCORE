import Card from "@/components/games/AttackerOrAlly/EmailHeader";
import Fake1 from "@/components/games/AttackerOrAlly/Fake1";
import Fake2 from "@/components/games/AttackerOrAlly/Fake2";
import Real1 from "@/components/games/AttackerOrAlly/Real1";
import Real2 from "@/components/games/AttackerOrAlly/Real2";
import { ReactNode } from "react";

type CardData = {
  card: JSX.Element;
  spam: boolean;
  from: String;
  subject: String;
  cues?: number;
};

var cards: CardData[] = [];

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
cards.push(fake1);

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
  cues: 2,
};
cards.push(fake2);

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
cards.push(real1);

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
cards.push(real2);

export default cards;
