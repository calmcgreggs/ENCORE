import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Introduction() {
  // use effect to navigate to page that reflects progress in firebase
  // need to figure out a way to include manager dashboard in evaluation keeping in the flow

  const { user, isLoaded } = useUser();
  const [ux, setUX] = useState(true);

  useEffect(() => {
    setTimeout(() => setUX(false), 2000);
  }, []);

  return (
    <>
      {isLoaded && !ux ? (
        <div className="p-10 text-2xl select-none relative flex flex-col ">
          <h1 className="text-3xl font-bold mb-10 text-left">
            Hello {user?.firstName},
          </h1>
          <h1>
            Welcome to this evaluation for ENCORE! The steps you will complete
            in this study are given below; note that between each phase, your
            progress will be automatically saved.
          </h1>
          <ol className="[&>*]:list-decimal px-10  mt-20 mb-10 text-gray-300/80 [&>*]:border-b-2 [&>*]:py-5 mx-auto">
            <div className="flex flex-row gap-20 border-t-2 ">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>Pre-Evaluation Test</strong> - This is used to set a
                baseline phishing detection accuracy before either of the
                training methods.
              </li>
              <h1 className="font-bold my-auto mx-auto ml-10 animate-pulse">
                5 Minutes
              </h1>
            </div>
            <div className="flex flex-row gap-20">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>Traditional Written Content Training</strong> - You will
                complete written online training designed to mimic traditional
                methods of phishing awareness training delivery.
              </li>
              <h1 className="font-bold my-auto mx-auto ml-8 animate-pulse">
                15 Minutes
              </h1>
            </div>
            <div className="flex flex-row gap-20">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>Mid-Evaluation Test</strong> - This is used to measure a
                phishing detection accuracy after the traditional written
                content training.
              </li>
              <h1 className="font-bold my-auto text-center mx-auto ml-10 animate-pulse">
                5 Minutes
              </h1>
            </div>
            <div className="flex flex-row gap-20">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>Attacker or Ally</strong> - You will then complete an
                interactive game that puts your learned skills to the test. The
                game has three rounds that has increasing difficulty as you
                progress. You will be asked in each round to identify which of
                the ten emails you see are phishing, and for each one you find,
                you will be asked to identify the specific cues. Once you have
                completed the game, you will be given the opportunity to reflect
                on your attempt and see which cues/emails you might have missed.
                There is no time limit, as your goal is to get the fastest time
                compared to your other co-workers (evaluation participants).
              </li>
              <h1 className="font-bold my-auto text-center mx-auto mr-10 animate-pulse">
                Max. 30 Minutes
              </h1>
            </div>
            <div className="flex flex-row gap-20">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>Post-Evaluation Test</strong> - This is used to find
                your final phishing detection accuracy as a result of both
                methods of training. This will take five minutes.
              </li>
              <h1 className="font-bold my-auto mx-auto ml-10 animate-pulse">
                5 Minutes
              </h1>
            </div>
            <div className="flex flex-row gap-20">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>Manager Dashboard</strong> - After the post evaluation
                test, you will be asked to inspect the manager dashboard, and
                particular take note of the information that you are shown. This
                will take five minutes.
              </li>
              <h1 className="font-bold my-auto mx-auto ml-10 animate-pulse">
                5 Minutes
              </h1>
            </div>
            <div className="flex flex-row gap-20">
              <li className="w-[80%] border-r-2 pr-5 ml-10">
                <strong>User Survey</strong> - Finally, you will be asked to
                complete an anonymous user survey that will be used for data
                analysis to answer research questions. This should only take
                five minutes.
              </li>
              <h1 className="font-bold my-auto mx-auto ml-10 animate-pulse">
                5 Minutes
              </h1>
            </div>
          </ol>
          <Link href="/tests/initial" className="mx-auto">
            <button className="mx-auto  p-5 px-10 bg-green-500">Next</button>
          </Link>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
          <h1 className="text-3xl">Loading Evaluation...</h1>
          <progress className="progress w-full mt-10"></progress>
        </div>
      )}
    </>
  );
}
