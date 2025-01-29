import Fake1 from "@/components/games/AttackerOrAlly/emails/fake/easy/Fake1";
import Fake2 from "@/components/games/AttackerOrAlly/emails/fake/easy/Fake2";
import Fake3 from "@/components/games/AttackerOrAlly/emails/fake/easy/Fake3";
import Fake4 from "@/components/games/AttackerOrAlly/emails/fake/easy/Fake4";
import Fake5 from "@/components/games/AttackerOrAlly/emails/fake/easy/Fake5";
import Fake11 from "@/components/games/AttackerOrAlly/emails/fake/hard/Fake11";
import Fake12 from "@/components/games/AttackerOrAlly/emails/fake/hard/Fake12";
import Fake13 from "@/components/games/AttackerOrAlly/emails/fake/hard/Fake13";
import Fake14 from "@/components/games/AttackerOrAlly/emails/fake/hard/Fake14";
import Fake15 from "@/components/games/AttackerOrAlly/emails/fake/hard/Fake15";
import Fake10 from "@/components/games/AttackerOrAlly/emails/fake/medium/Fake10";
import Fake6 from "@/components/games/AttackerOrAlly/emails/fake/medium/Fake6";
import Fake7 from "@/components/games/AttackerOrAlly/emails/fake/medium/Fake7";
import Fake8 from "@/components/games/AttackerOrAlly/emails/fake/medium/Fake8";
import Fake9 from "@/components/games/AttackerOrAlly/emails/fake/medium/Fake9";
import Real1 from "@/components/games/AttackerOrAlly/emails/real/Real1";
import Real10 from "@/components/games/AttackerOrAlly/emails/real/Real10";
import Real11 from "@/components/games/AttackerOrAlly/emails/real/Real11";
import Real12 from "@/components/games/AttackerOrAlly/emails/real/Real12";
import Real13 from "@/components/games/AttackerOrAlly/emails/real/Real13";
import Real14 from "@/components/games/AttackerOrAlly/emails/real/Real14";
import Real15 from "@/components/games/AttackerOrAlly/emails/real/Real15";
import Real2 from "@/components/games/AttackerOrAlly/emails/real/Real2";
import Real3 from "@/components/games/AttackerOrAlly/emails/real/Real3";
import Real4 from "@/components/games/AttackerOrAlly/emails/real/Real4";
import Real5 from "@/components/games/AttackerOrAlly/emails/real/Real5";
import Real6 from "@/components/games/AttackerOrAlly/emails/real/Real6";
import Real7 from "@/components/games/AttackerOrAlly/emails/real/Real7";
import Real8 from "@/components/games/AttackerOrAlly/emails/real/Real8";
import Real9 from "@/components/games/AttackerOrAlly/emails/real/Real9";
import TestFake1 from "@/components/games/AttackerOrAlly/emails/test/TestFake1";
import TestFake2 from "@/components/games/AttackerOrAlly/emails/test/TestFake2";
import TestReal1 from "@/components/games/AttackerOrAlly/emails/test/TestReal1";
import TestReal2 from "@/components/games/AttackerOrAlly/emails/test/TestReal2";

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -                                                                       ROUND ONE                                                                                       -
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var r1: CardData[] = [];

const fake1: CardData = {
  card: (
    <Fake1
      from="british-airways@alerting-services.com"
      subject="£300 Voucher for Your Next British Airways Flight"
      emailNo={0}
    />
  ),
  from: "british-airways@alerting-services.com",
  subject: "£300 Voucher for Your Next British Airways Flight",
  spam: true,
  cues: 5,
  context:
    "You are sitting at your office and decide to check your personal emails. You recieve this email, however you have not taken any flights with British Airways recently...",
};
r1.push(fake1);

const fake2: CardData = {
  card: (
    <Fake2
      from="itdeparment@company.com"
      subject="URGENT : Download New Security Key"
      emailNo={1}
    />
  ),
  from: "itdeparment@company.com",
  subject: "URGENT : Download New Security Key",
  spam: true,
  cues: 7,
  context:
    "You work at Nukletech Inc. and was talking to the head of IT, Tim Hale, this morning. Nothing seemed out of the ordinary...",
};
r1.push(fake2);

const real1: CardData = {
  card: (
    <Real1
      from="timhale@nucletek.com"
      subject="Patch updates for all employees"
      emailNo={2}
    />
  ),
  from: "timhale@nucletek.com",
  subject: "Patch updates for all employees",
  spam: false,
  context:
    "Tim mentioned to you this morning that a new zero day vulnerability has been discovered and the company would be sending out a patch update immediately...",
};
r1.push(real1);

const real2: CardData = {
  card: (
    <Real2
      from="danlindsay@nucletek.com"
      subject="Meeting Notes - Going Forward"
      emailNo={3}
    />
  ),
  spam: false,
  from: "danlindsay@nucletek.com",
  subject: "Meeting Notes - Going Forward",
  context:
    "Yesterday, you had a meeting with your department, and Dan Lindsay, your coworker, was taking minutes and said that he would send them to you...",
};
r1.push(real2);

const fake3: CardData = {
  card: (
    <Fake3
      subject="Immediate Action Required: SCADA Software Update"
      from="it-support@criticalupdates-systems.com"
      emailNo={4}
    />
  ),
  spam: true,
  from: "it-support@criticalupdates-systems.com",
  subject: "Immediate Action Required: SCADA Software Update",
  context:
    "You receive this email 15 minutes before the end of the working day. You haven't been notified of any SCADA updates...",
  cues: 7,
};
r1.push(fake3);

const fake4: CardData = {
  card: (
    <Fake4
      subject="Complete Mandatory ICS Cybersecurity Training"
      from="training@secure-awareness-training.com"
      emailNo={5}
    />
  ),
  spam: true,
  from: "training@secure-awareness-training.com",
  subject: "Complete Mandatory ICS Cybersecurity Training",
  context:
    "In your team meeting this morning, everything seemed normal. Your workplace has had no security incidents in the past 5 years...",
  cues: 6,
};
r1.push(fake4);

const fake5: CardData = {
  card: (
    <Fake5
      subject="Critical Assistance Needed for PLC Malfunction"
      from="support@plc-tech-support.com"
      emailNo={6}
    />
  ),
  spam: true,
  from: "support@plc-tech-support.com",
  subject: "Critical Assistance Needed for PLC Malfunction",
  context:
    "After receiving this email, you checked the PLC monitoring system. Nothing seems out of the ordinary...",
  cues: 6,
};
r1.push(fake5);

const real3: CardData = {
  card: (
    <Real3
      from="jamienewton@nucletek.com"
      subject="Scheduled Maintainence"
      emailNo={7}
    />
  ),
  spam: false,
  from: "jamienewton@nucletek.com",
  subject: "Scheduled Maintainence",
  context:
    "Yesterday, you had a meeting with your department, and Dan Lindsay, your coworker, was taking minutes and said that he would send them to you...",
};
r1.push(real3);

const real4: CardData = {
  card: (
    <Real4
      from="benmackintosh@siemens.com"
      subject="Firmware Update for Simatic S7-1200"
      emailNo={7}
    />
  ),
  spam: false,
  from: "benmackintosh@siemens.com",
  subject: "Firmware Update for Simatic S7-1200",
  context:
    "A new critical vulnerability, CVE-2025-41783, has been recently been discovered",
};
r1.push(real4);

const real5: CardData = {
  card: (
    <Real5
      from="alerts@nucletek.com"
      subject="Critical Alert: PLC Communication Failure Detected"
      emailNo={7}
    />
  ),
  spam: false,
  from: "alerts@nucletek.com",
  subject: "Critical Alert: PLC Communication Failure Detected",
  context:
    "A new critical vulnerability, CVE-2025-41783, has been recently been discovered",
};
r1.push(real5);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -                                                                       ROUND TWO                                                                                       -
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// S
// R
// R
// S
// S
// R
// R
// S
// S
// R

var r2: CardData[] = [];

const fake6: CardData = {
  card: (
    <Fake6
      from="support@automation-patch.net"
      subject="Firmware Update for PLC Model X300"
      emailNo={0}
    />
  ),
  from: "support@automation-patch.net",
  subject: "Firmware Update for PLC Model X300",
  spam: true,
  cues: 6,
  context:
    "You recieve this email and check your stock inventory, however you realise that you do not use an PLCs with a model X300...",
};
r2.push(fake6);

const real6: CardData = {
  card: (
    <Real6
      from="operations@scottishwater.co.uk"
      subject="Weekly Report: Control System Performance Metrics"
      emailNo={1}
    />
  ),
  from: "operations@scottishwater.co.uk",
  subject: "Weekly Report: Control System Performance Metrics",
  spam: false,
  context:
    "Your team works closely with Scottish Water to monitor control system performance metrics...",
};
r2.push(real6);

const real7: CardData = {
  card: (
    <Real7
      from="monitoring@nucletek.com"
      subject="Notification: Threshold Breach in Pressure System"
      emailNo={2}
    />
  ),
  from: "monitoring@nucletek.com",
  subject: "Notification: Threshold Breach in Pressure Systems",
  spam: false,
  context:
    "Nucletek, your company, has been having trouble with Zone 5's pressure system recently...",
};
r2.push(real7);

const fake7: CardData = {
  card: (
    <Fake7
      from="recalls@controllerupdates.net"
      subject="Urgent Recall: ICS Controller Model 789"
      emailNo={3}
    />
  ),
  from: "recalls@controllerupdates.net",
  subject: "Urgent Recall: ICS Controller Model 789",
  spam: true,
  cues: 7,
  context:
    "Upon recieving this email, you check your company's inventory and realise that you have never heard of an ICS controller 789...",
};
r2.push(fake7);

const fake8: CardData = {
  card: (
    <Fake8
      from="webinar@ics-securityevents.net"
      subject="Act Quickly - Invitation: Securing ICS from Emerging Threats in 2025"
      emailNo={4}
    />
  ),
  from: "webinar@ics-securityevents.net",
  subject: "Act Quickly - Securing ICS from Emerging Threats in 2025",
  spam: true,
  cues: 4,
  context:
    "You recently attended an ICS cybersecurity seminar, however, you have never heard of the company that this email comes from...",
};
r2.push(fake8);

const real8: CardData = {
  card: (
    <Real8
      from="inventory@siemens.com"
      subject="Urgent: Low Stock on S7-1200 Replacement Parts"
      emailNo={5}
    />
  ),
  from: "inventory@siemens.com",
  subject: "Urgent: Low Stock on S7-1200 Replacement Parts",
  spam: false,
  context:
    "Your company uses Siemens Simatic S7-1200 PLCs to control key areas of your workplace. The last time you replaced these parts was roughly five years ago...",
};
r2.push(real8);

const real9: CardData = {
  card: (
    <Real9
      from="dansimpson@icslearn.co.uk"
      subject="Feedback on Recent Training Session at ICS Learn"
      emailNo={6}
    />
  ),
  from: "dansimpson@icslearn.co.uk",
  subject: "Feedback on Recent Training Session at ICS Learn",
  spam: false,
  context:
    "You recently attended a training session hosted by ICS Learn and the instructor indicated that they would be asking for feedback...",
};
r2.push(real9);

const fake9: CardData = {
  card: (
    <Fake9
      from="alerts@network-monitoring-alerts.com"
      subject="Unauthorized Traffic Detected in ICS Network"
      emailNo={7}
    />
  ),
  from: "alerts@network-monitoring-alerts.com",
  subject: "Unauthorized Traffic Detected in ICS Network",
  spam: true,
  cues: 7,
  context:
    "You recieve regular emails alerting you about potential network vulnerabilities, however this does not look the same as the rest...",
};
r2.push(fake9);

const fake10: CardData = {
  card: (
    <Fake10
      from="icsfree-trial@softwareoffer.net"
      subject="Start Your Free Trial for Premium ICS Monitoring Software"
      emailNo={8}
    />
  ),
  from: "icsfree-trial@softwareoffer.net",
  subject: "Start Your Free Trial for Premium ICS Monitoring Software",
  spam: true,
  cues: 6,
  context:
    "Your company already uses ICS monitoring software, but this looks like a good deal...",
};
r2.push(fake10);

const real10: CardData = {
  card: (
    <Real10
      from="certificates@giac.org"
      subject="Download your GIAC Cloud Security Essentials Certificate!"
      emailNo={9}
    />
  ),
  from: "certificates@giac.org",
  subject: "Download your GIAC Cloud Security Essentials Certificate!",
  spam: false,
  context:
    "You recently completed the GIAC Cloud Security Essentials training and your instructor told you that you'd recieve a certificate soon...",
};
r2.push(real10);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -                                                                       ROUND THREE                                                                                     -
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var r3: CardData[] = [];

// Microsoft 365 Fake Password Expiry
// Return to work survey scam
// Zoom Invite
// HR Violation Policy
// Famous Data Breach - Linkedin

// R;
// S;
// S;
// S;
// S;
// R;
// R;
// R;
// S;
// R;

const real11: CardData = {
  card: (
    <Real11
      from="hr@nucletek.com"
      subject="Central Control Room Shift Changes"
      emailNo={0}
    />
  ),
  from: "hr@nucletek.com",
  subject: "Central Control Room Shift Changes",
  spam: false,
  context:
    "Your manager told you that some shift changes may be coming into effect at the weekly stand-up meeting...",
};
r3.push(real11);

// Needs flagtext added but trying to get through as many as i can
const fake11: CardData = {
  card: (
    <Fake11
      from="no-reply@microsoftemail.com"
      subject="Unusual sign in activity"
      emailNo={1}
    />
  ),
  from: "no-reply@microsoftemail.com",
  subject: "Unusual sign in activity",
  spam: true,
  cues: 5,
  context:
    "Microsoft recently suffered a large data breach and advised all users to change their passwords...",
};
r3.push(fake11);

const fake12: CardData = {
  card: (
    <Fake12
      from="officereturn@nuckletek.com"
      subject="Return to office questionnaire"
      emailNo={2}
    />
  ),
  from: "officereturn@nuckletek.com",
  subject: "Return to office questionnaire",
  spam: true,
  cues: 3,
  context:
    "After the COVID pandemic, Nucletek, the company your work for, announced in a press conference that all employees will be returning to work...",
};
r3.push(fake12);

const fake13: CardData = {
  card: (
    <Fake13
      from="no-reply@zoom.host"
      subject="Meeting Reminder : Today at 4pm"
      emailNo={3}
    />
  ),
  from: "no-reply@zoom.host",
  subject: "Meeting Reminder : Today at 4pm",
  spam: true,
  cues: 4,
  context:
    "After a press conference where the CEO of Nucletek announced their quarterly earnings, you have recieved this zoom invite...",
};
r3.push(fake13);

const real12: CardData = {
  card: (
    <Real12
      from="monitoring@nucletek.com"
      subject="Unplanned System Downtime Alert"
      emailNo={4}
    />
  ),
  from: "monitoring@nucletek.com",
  subject: "Unplanned System Downtime Alert",
  spam: false,
  context:
    "The Data Logging platform has been experiencing some downtime lately, this doesn't seem too out of the ordinary, right?",
};
r3.push(real12);

const real13: CardData = {
  card: (
    <Real13
      from="safety@nucletek.com"
      subject="Upcoming ICS Emergency Response Safety Drill"
      emailNo={5}
    />
  ),
  from: "safety@nucletek.com",
  subject: "Upcoming ICS Emergency Response Safety Drill",
  spam: false,
  context:
    "Nucletek conducts a monthly emergency response safety drill and gives prior notice to users...",
};
r3.push(real13);

const real14: CardData = {
  card: (
    <Real14
      from="reports@nucletek.com"
      subject="Monthly ICS System Performance Report - January 2025"
      emailNo={6}
    />
  ),
  from: "reports@nucletek.com",
  subject: "Monthly ICS System Performance Report - January 2025",
  spam: false,
  context:
    "You recieve a monthly report from Nucletek about the uptime of all systems...",
};
r3.push(real14);

const fake14: CardData = {
  card: (
    <Fake14
      from="hr@nucletek-alerts.com"
      subject="Violation of HR Policy - Immediate Action Required"
      emailNo={7}
    />
  ),
  from: "hr@nucletek-alerts.com",
  subject: "Violation of HR Policy - Immediate Action Required",
  spam: true,
  cues: 6,
  context:
    "You have never got in trouble with HR before, and you can't think of anything you might have done wrong...",
};
r3.push(fake14);

const real15: CardData = {
  card: (
    <Real15
      from="cyber@nucletek.com"
      subject="Critical Cyber Threat Guidance"
      emailNo={8}
    />
  ),
  from: "cyber@nucletek.com",
  subject: "Critical Cyber Threat Guidance",
  spam: false,
  context:
    "Your co-workers have been complaining about recieving many spam emails all week...",
};
r3.push(real15);

const fake15: CardData = {
  card: (
    <Fake15
      from="notifications@linkedin-updates.com"
      subject={"You Have 1 New Connection Request!"}
      emailNo={9}
    />
  ),
  from: "notifications@linkedin-updates.com",
  subject: "You Have 1 New Connection Request!",
  spam: true,
  cues: 2,
  context:
    "You've recently joined Linkedin and become connected with lots of people...",
};
r3.push(fake15);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -                                                                       TEST EMAILS                                                                                     -
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var test: CardData[] = [];

const testfake1: CardData = {
  card: (
    <TestFake1
      from="british-airways@alerting-services.com"
      subject="£300 Voucher for Your Next British Airways Flight"
    />
  ),
  from: "british-airways@alerting-services.com",
  subject: "3£300 Voucher for Your Next British Airways Flight",
  spam: true,
  cues: 5,
  context: "TBC",
};
test.push(testfake1);

const testfake2: CardData = {
  card: (
    <TestFake2
      from="itdeparment@nukletech.com"
      subject="URGENT : Download New Security Key"
    />
  ),
  from: "itdeparment@nukletech.com",
  subject: "3URGENT : Download New Security Key",
  spam: true,
  cues: 7,
  context: "TBC",
};
test.push(testfake2);

const testreal1: CardData = {
  card: (
    <TestReal1
      from="timhale@nucletek.com"
      subject="Patch updates for all employees"
    />
  ),
  from: "timhale@nucletek.com",
  subject: "3Patch updates for all employees",
  spam: false,
  context: "TBC",
};
test.push(testreal1);

const testreal2: CardData = {
  card: (
    <TestReal2
      from="danlindsay@nucletek.com"
      subject="3Meeting Notes - Going Forward"
    />
  ),
  spam: false,
  from: "danlindsay@nucletek.com",
  subject: "Meeting Notes - Going Forward",
  context: "TBC",
};
test.push(testreal2);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -                                                                       CUE DESCRIPTIONS                                                                                -
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

type ReflectionDescriptions = {
  Good: string;
  Bad: string;
};

// Derived from Parsons et. al amongst other sources
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
  Bad: "Remember to check attachments in an email before downloading them. One indication that an attachment is malicious is that it's file extension is an .exe or .bat file",
};
reflectionDescriptions["UnfamiliarURL"] = {
  Good: "Well Done! You identified the unfamiliar URL",
  Bad: "Remember to hover over links to check that they are legitimate and make sense. Links in emails are the easiest way to compromise a victim",
};
reflectionDescriptions["UnfamiliarDomain"] = {
  Good: "Well Done! You identified the unfamiliar domain",
  Bad: "Remember to check domain names of email addresses. If they do not make sense, or do not seem specific enough, they are more than likely fake",
};
reflectionDescriptions["FurtherContact"] = {
  Good: "Well Done! You identified an attempt to continue phishing on a different means of communication",
  Bad: "This was an attempt to continue the phishing attempt using a different means of communication. This is often used to add credibility to an email, which might be dangerous for a user if they believe it",
};
reflectionDescriptions["Generic"] = {
  Good: "Well Done! You identified the generic information.",
  Bad: "Malicious Cyber Actors may use generic language to cast their phishing net wider. If a company emails you, they will generally use lots of information, especially regarding urgent notices",
};
reflectionDescriptions["MasqueradingLink"] = {
  Good: "Well Done! You identified the Masquerading Link.",
  Bad: "Link text can be changed to look legitimate, however, you can always hover over the link to ensure that it leads to the expected URL.",
};

export const roundOneEmails = r1;
export const roundTwoEmails = r2;
export const roundThreeEmails = r3;
export const Reflections = reflectionDescriptions;
export const testEmails = test;
