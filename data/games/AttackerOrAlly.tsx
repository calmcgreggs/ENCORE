import Fake1 from "@/components/games/AttackerOrAlly/Fake1";
import Fake2 from "@/components/games/AttackerOrAlly/Fake2";
import Real1 from "@/components/games/AttackerOrAlly/Real1";
import Real2 from "@/components/games/AttackerOrAlly/Real2";

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
  cues: 7,
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
  cues: 7,
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

var r3: CardData[] = [];

const fake5: CardData = {
  card: (
    <Fake1
      from="british-airways@alerting-services.com"
      subject="£300 Voucher for Your Next British Airways Flight"
    />
  ),
  from: "british-airways@alerting-services.com",
  subject: "3£300 Voucher for Your Next British Airways Flight",
  spam: true,
  cues: 5,
};
r3.push(fake5);

const fake6: CardData = {
  card: (
    <Fake2
      from="itdeparment@nukletech.com"
      subject="URGENT : Download New Security Key"
    />
  ),
  from: "itdeparment@nukletech.com",
  subject: "3URGENT : Download New Security Key",
  spam: true,
  cues: 7,
};
r3.push(fake6);

const real5: CardData = {
  card: (
    <Real1
      from="timhale@nucletek.com"
      subject="Patch updates for all employees"
    />
  ),
  from: "timhale@nucletek.com",
  subject: "3Patch updates for all employees",
  spam: false,
};
r3.push(real5);

const real6: CardData = {
  card: (
    <Real2
      from="danlindsay@nucletek.com"
      subject="3Meeting Notes - Going Forward"
    />
  ),
  spam: false,
  from: "danlindsay@nucletek.com",
  subject: "Meeting Notes - Going Forward",
};
r3.push(real6);

type ReflectionDescriptions = {
  Good: string;
  Bad: string;
};

// Derived from Parsons et. al
let reflectionDescriptions: { [id: string]: ReflectionDescriptions } = {};
reflectionDescriptions["SimilarDomain"] = {
  Good: "Well Done! You identified a similar domain attack!",
  Bad: "This attack attempts to use a domain similar to a legitimate one",
};
reflectionDescriptions["ImpersonalGreeting"] = {
  Good: "Well Done! You identified an impersonal greeting!",
  Bad: "This email is impersonal. Emails you recieve from a company that your interact with should have you name on file.",
};
reflectionDescriptions["SpellingError"] = {
  Good: "Well Done! You identified the spelling error!",
  Bad: "One of the words of this cue is spelled wrong. Legitimate companies will most often check their emails for spelling mistakes, however attackers that do not speak English as their first language may make this mistake.",
};

reflectionDescriptions["GrammaticalError"] = {
  Good: "Well Done! You identified the grammatical error!",
  Bad: "This cue does not make grammatical sense. Legitimate companies will most often check their emails for grammatical mistakes, however attackers that do not speak English as their first language may make this mistake.",
};

reflectionDescriptions["Urgency"] = {
  Good: "Well Done! You identified a phony call to action!",
  Bad: "Attackers will often try to incite emotion from a victim in order to control their behaviour. While this could be a legitimate cue from a reputable source, the combination of other cues in this email indicate that this is a phishing attempt",
};
reflectionDescriptions["PositiveConsequences"] = {
  Good: "Well Done! You identified the promise of positive consequences of interacting with this email!",
  Bad: "Attackers will often try to incite emotion from a victim in order to control their behaviour. While this could be a legitimate cue from a reputable source, this seems too good to be true and appears suspicious considering the other cues",
};
reflectionDescriptions["NegativeConsequences"] = {
  Good: "Well Done! You identified the promise of negative consequences if you didn't interact with this email!",
  Bad: "Attackers will often try to incite emotion from a victim in order to control their behaviour. While this could be a legitimate cue from a reputable source, this seems too bad to be true and appears suspicious considering the other cue",
};
reflectionDescriptions["Nonsense"] = {
  Good: "Well Done! You identified that this statement does not align with your current frame of references!",
  Bad: "One indication that part of a phishing email may be a cue is if it doesn't make sense. This is what is apparent in this cue.",
};
reflectionDescriptions["MaliciousAttachment"] = {
  Good: "Well Done! You identified that the attachment was malicious!",
  Bad: "Remember to check attachments in an email before downloading them. One inication that an attachment is malicious is that it's file extension is an .exe or .bat file",
};

export const roundOneEmails = r1;
export const roundTwoEmails = r2;
export const roundThreeEmails = r3;
export const Reflections = reflectionDescriptions;
