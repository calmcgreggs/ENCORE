import PageLayout from "@/layouts/pagelayout";
import Image from "next/image";

export default function SE1() {
  // What is Social Engineering and Phishing
  return (
    <PageLayout>
      <div className="text-center mt-10 px-10 [&>*]:my-10">
        <h1 className="text-left font-bold text-2xl">
          What is Social Engineering and Phishing?
        </h1>
        <h1>
          In a social engineering attack, an attacker uses human interaction
          (social skills) to obtain or compromise information about an
          organization or its computer systems. An attacker may seem unassuming
          and respectable, possibly claiming to be a new employee, repair
          person, or researcher and even offering credentials to support that
          identity. However, by asking questions, he or she may be able to piece
          together enough information to infiltrate an organization&apos;s network.
          If an attacker is not able to gather enough information from one
          source, he or she may contact another source within the same
          organization and rely on the information from the first source to add
          to his or her credibility.
        </h1>
        <h1>
          Phishing is a form of social engineering. Phishing attacks use email
          or malicious websites to solicit personal information by posing as a
          trustworthy organization. For example, an attacker may send email
          seemingly from a reputable credit card company or financial
          institution that requests account information, often suggesting that
          there is a problem. When users respond with the requested information,
          attackers can use it to gain access to the accounts.
        </h1>
        <Image
          src="/se1.jpg"
          width={400}
          height={200}
          alt="SE1"
          className="mx-auto"
        />
        <h1>
          Types of Phishing attack include : Phishing (general messages sent to
          a variety of victims), Spear-Phishing (personalised messages sent to
          one victim to compromise them) and Whaling (a subset of phishing
          attacks targetting those with high-security credentials such as
          company executives). Phishing attacks can be delivered using many
          mediums, such as Smishing (phishing using text messages) or Vishing
          (phishing using telephone calls).
        </h1>
      </div>
    </PageLayout>
  );
}
