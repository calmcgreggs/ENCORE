import PageLayout from "@/layouts/pagelayout";
import Link from "next/link";

export default function SE4() {
  // 
  return (
    <PageLayout>
      <div className="text-center mt-10 px-10 [&>*]:my-10">
        <h1 className="text-3xl w-1/2 text-center mx-auto font-bold">
          Congratulations on completing the traditional written training. You
          will now complete a mid-evaluation test, to assess your phishing
          detection accuracy after completing this first bout of training.
        </h1>
        <Link href="/tests/mid">
          <button className="p-5 bg-green-700 rounded-xl hover:bg-green-600">
            Go to mid-evaluation test
          </button>
        </Link>
      </div>
    </PageLayout>
  );
}
