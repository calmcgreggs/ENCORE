import courses from "@/data/courses";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import useIncrementPageProgress from "@/hooks/useIncrementPageProgress";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const paths = router.pathname.split("/");
  const page = parseInt(paths.pop() as string);
  const topicUnder = paths.pop() as string;
  const topic = topicUnder.split("_").join(" ");
  const course = courses.find((each) => {
    if (each.Name == topic) {
      return true;
    } else {
      return false;
    }
  });

  const [userProfile, setUserProfile] = useState<
    UserProfile | null | undefined
  >();

  const { user, isLoaded } = useUser();

  // TODO: This does need fixed at some point
  async function GetPF() {
    if (user?.primaryEmailAddress?.toString()) {
      setUserProfile(
        // eslint-disable-next-line
        await useGetUserProfile(user.primaryEmailAddress.toString())
      );
    }
  }

  useEffect(() => {
    IncrementPage();
  }, [page, userProfile]);

  async function IncrementPage() {
    if (user?.primaryEmailAddress?.toString() && userProfile && course) {
      setUserProfile(
        // eslint-disable-next-line
        await useIncrementPageProgress(
          user.primaryEmailAddress.toString(),
          course?.ID,
          userProfile,
          page
        )
      );
    }
  }

  useEffect(() => {
    GetPF();
  }, [user]);

  const c = courses.filter((each) => {
    if (each.Name == topic) {
      return true;
    } else {
      return false;
    }
  })[0];
  return (
    <div className="lg:p-10 p-2">
      <div className=" flex flex-row">
        <h1 className="lg:text-3xl text-xs my-auto font-bold">{topic}</h1>
        <div className="my-auto [&>*]:mx-2 flex flex-row ml-auto">
          <h1 className="hidden lg:block">
            Page {page > c.Max_Pages ? c.Max_Pages : page}/{c.Max_Pages}
          </h1>
          <progress
            className="progress progress-success w-20 my-auto h-4"
            value={page}
            max={c.Max_Pages}
          />
          <Link
            href={
              page == 1
                ? "/dashboard"
                : "/training/" + topicUnder + "/" + (page - 1)
            }
          >
            <button className="lg:px-10 px-5 rounded-xl bg-purple-800">
              ←
            </button>
          </Link>
          <Link
            href={
              page == c.Max_Pages
                ? "/dashboard"
                : "/training/" + topicUnder + "/" + (page + 1)
            }
          >
            <button
              className="lg:px-10 px-5 rounded-xl bg-purple-800"
              onClick={() => IncrementPage()}
            >
              →
            </button>
          </Link>
        </div>
      </div>
      {children}
      <Link href="/dashboard">
        <button className="bg-purple-500 lg:p-5 p-2 rounded-xl lg:sticky lg:bottom-10 bottom-5 lg:w-fit center">
          Back to Dashboard
        </button>
      </Link>
    </div>
  );
}
