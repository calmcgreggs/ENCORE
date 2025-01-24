import PageLayout from "@/layouts/pagelayout";

export default function SE3() {
  // Three Stages
  return (
    <PageLayout>
      <div className="text-center mt-10 px-10 [&>*]:my-10">
        <h1 className="text-2xl font-bold text-left">
          The Three Stages of Thinking 
        </h1>
        <h1>
          Rick Wash, a blah from the university wherever, modelled the stages of
          thinking that expert users go through when reading and categorising an
          email. This was derived from interviews and evaluations with experts
          part of an anti-phishing team at the same university.
        </h1>
        <div className="flex flex-row [&>*]:w-1/3 [&>*]:mx-5">
          <div className="border-r-2 pr-10">
            <h1 className="text-xl font-bold underline-offset-2 underline mb-5">
              Sensemaking
            </h1>
            <h1>
              Where a user reads an email and tries to understand how it fits in
              their current frame of reference. The context of an email is
              important in this process, for example, if an email comes from a
              bank that they do not have an account with, the user will try and
              make sense as to why they have received this email.
            </h1>
          </div>
          <div className="border-r-2 pr-10">
            <h1 className="text-xl font-bold underline-offset-2 underline mb-5">
              Suspicion
            </h1>
            <h1>
              When enough features of an email trigger the reader to realise
              that an alternative explanation for receiving the email is that it
              could be a phishing attack.
            </h1>
          </div>
          <div>
            <h1 className="text-xl font-bold underline-offset-2 underline mb-5">
              Action
            </h1>
            <h1>
              The user deals with the email. If they accept it as genuine, they
              reply or click on the link, otherwise, they delete or report it.
            </h1>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
