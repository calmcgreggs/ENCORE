import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Introduction() {
  // use effect to navigate to page that reflects progress in firebase

  const { user } = useUser();
  return (
    <div className="p-10 text-2xl select-none relative flex flex-col [&>*]:mx-auto">
      <h1 className="text-3xl font-bold mb-10">Hello {user?.firstName},</h1>
      <h1>
        Welcome to this evaluation for ENCORE! The steps you will complete in
        this study are given below; note that between each phase, your progress
        will be automatically saved.
      </h1>
      <ol className="[&>*]:list-decimal px-10  [&>*]:mt-10 mb-10 text-gray-300/80">
        <li>
          <strong>Pre-Evaluation Test</strong> - This is used to set a baseline
          phishing detection accuracy before either of the training methods.
          This should take no longer than five minutes.
        </li>
        <li>
          <strong>Traditional Written Content Training</strong> - You will
          complete written online training designed to mimic traditional methods
          of phishing awareness training delivery. This should take no longer
          than fifteen minutes.
        </li>
        <li>
          <strong>Mid-Evaluation Test</strong> - This is used to measure a
          phishing detection accuracy after the traditional written content
          training. This should take no longer than five minutes.
        </li>
        <li>
          <strong>Attacker or Ally</strong> - You will then complete an
          interactive game that puts your learned skills to the test. The game
          has three rounds that has increasing difficulty as you progress. You
          will be asked in each round to identify which of the ten emails you
          see are phishing, and for each one you find, you will be asked to
          identify the specific cues. Once you have completed the game, you will
          be given the opportunity to reflect on your attempt and see which
          cues/emails you might have missed. There is no time limit, as your
          goal is to get the fastest time compared to your other co-workers
          (evaluation participants), however this should take at most thirty
          minutes.
        </li>
        <li>
          <strong>Post-Evaluation Test</strong> - This is used to find your
          final phishing detection accuracy as a result of both methods of
          training. This will take five minutes.
        </li>
        <li>
          <strong>Manager Dashboard</strong> - After the post evaluation test,
          you will be asked to inspect the manager dashboard, and particular
          take note of the information that you are shown. This will take five
          minutes.
        </li>
        <li>
          <strong>User Survey</strong> - Finally, you will be asked to complete
          an anonymous user survey that will be used for data analysis to answer
          research questions. This should only take five minutes.
        </li>
      </ol>
      <Link href="/tests/initial">
        <button className="mx-auto  p-5 px-10 bg-green-500">Next</button>
      </Link>
    </div>
  );
}
