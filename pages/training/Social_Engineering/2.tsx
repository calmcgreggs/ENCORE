import PageLayout from "@/layouts/pagelayout";

export default function SE2() {
  // Commonly Used Phishing Tactics
  // This needs to be finished
  return (
    <PageLayout>
      <div className="text-center mt-10 px-10 [&>*]:my-10">
        <h1 className="text-2xl font-bold text-left">
          The anatomy of an email and it&apos;s vulnerabilities
        </h1>
        <h1>
          This training will focus on phishing emails as this is the most likely
          social engineering attack you will encounter in your day-to-day
          worklife. Phishing emails use different techniques to impersonate
          another, or trick a user into believing the email to be genuine. These
          often leave behind &apos;cues&apos;, which allow a user to spot
          mistakes that may indicate that an email is not genuine.
        </h1>
        <div className="flex flex-row [&>*]:w-1/3 [&>*]:mx-5">
          <div className="border-r-2 pr-10">
            <h1 className="text-xl font-bold underline-offset-2 underline mb-5">
              Email Address
            </h1>
            <h1>
              Urgency is used to give tight deadlines to email recipients to
              create a sense of urgency that distracts them from the rest of the
              message and pressures them into acting quickly. For example, you
              may recieve an email telling you that your computer may have a
              virus, or that you have broken a company policy and may be at risk
              of being fired. In these situations, take a moment, verify the
              email, and then act.
            </h1>
          </div>
          <div className="border-r-2 pr-10">
            <h1 className="text-xl font-bold underline-offset-2 underline mb-5">
              Subject
            </h1>
            <h1>
              Authority is used to convince readers that the message comes from
              a trustworthy source. Examples of this could be pretending to be a
              senior executive, a trusted colleague or a reliable company. MCAs
              may use &apos;similar domain attacks&apos; by sending emails from
              a domain that appear similar to the user. For example, if you work
              at &apos;nucletek.com&apos;, a worker may have the email address
              &apos;[name]@nucletek.com&apos; and scammers may use a similar
              domain to send authoritative emails from, such as
              &apos;hr@nucletek-team.com&apos;. Always ensure that the domain of
              a sender is legitimate
            </h1>
          </div>
          <div>
            <h1 className="text-xl font-bold underline-offset-2 underline mb-5">
              Body
            </h1>
            <h1>
              Imitation is used to exploit normal business communications,
              processes and daily habits to trick a reader into reacting to a
              message. MCAs may use &apos;similar domain attacks&apos; by
              sending emails from a domain that appear similar to the user, such
              as &apos;facebook-team.com&apos; instead of the genuine
              &apos;facebook.com&apos;. You can avoid these attacks by always
              checking the sender name and email address, and verifying that it
              comes from the legimate company.
            </h1>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
