import AdminStat from "@/components/dashboard/AdminStat";
import EmployeeScore from "@/components/dashboard/EmployeeScore";
import AdminPieChart from "@/components/dashboard/PieChart";
import DashboardTopic from "@/components/dashboard/topic";
import courses from "@/data/courses";
import dev from "@/data/developer_mode";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import useIncrementPageProgress from "@/hooks/useIncrementPageProgress";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState<
    UserProfile | null | undefined
  >();

  const { user, isLoaded } = useUser();
  const [adminView, setAdminView] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // TODO: This does need fixed at some point
  async function GetPF() {
    if (user?.primaryEmailAddress?.toString()) {
      setUserProfile(
        // eslint-disable-next-line
        await useGetUserProfile(user.primaryEmailAddress.toString())
      );
      setLoading(false);
    }
  }

  // async function SetPF(field: string, data: any) {
  //   if (user?.primaryEmailAddress?.toString() && userProfile) {
  //     setUserProfile(
  //       // eslint-disable-next-line
  //       await useSetUserProfile(
  //         user.primaryEmailAddress.toString(),
  //         field,
  //         data,
  //         userProfile
  //       )
  //     );
  //   }
  // }

  async function IncrementPage(course: number) {
    if (user?.primaryEmailAddress?.toString() && userProfile) {
      setUserProfile(
        // eslint-disable-next-line
        await useIncrementPageProgress(
          user.primaryEmailAddress.toString(),
          course,
          userProfile,
          1
        )
      );
    }
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPF();
  }, [user]);

  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);

  type Tab = "Topics" | "Tests" | "Highscores";
  type AdminTab = "Overview" | "Employee Scores" | "Cue Breakdown";

  const [tab, setTab] = useState<Tab>("Topics");
  const [adminTab, setAdminTab] = useState<AdminTab>("Overview");

  useEffect(() => {
    if (
      user &&
      user.organizationMemberships[0] &&
      user?.organizationMemberships[0]["role"] == "org:manager"
    )
      setIsAdmin(true);
  }, [user]);

  return (
    isLoaded && (
      <div className=" relative flex flex-col">
        <div className="my-10 mx-7 w-fit">
          <h1 className="xl:text-3xl font-bold  text-xl">
            Welcome Back {user?.fullName ? user.fullName : user?.username}
            {adminView ? " (Admin)" : ""}!
          </h1>
          <h1 className="text-sm">
            Last signed in on {user?.lastSignInAt?.toDateString()}
          </h1>
          {isAdmin && (
            <button
              className="absolute top-4 right-4 p-2 bg-red-600 rounded-xl hover:bg-red-700"
              onClick={() => {
                setAdminView(!adminView);
              }}
            >
              {adminView ? "Switch to User View" : "Switch to Admin View"}
            </button>
          )}
        </div>
        {!adminView ? (
          <>
            <div className="grid grid-cols-3 xl:w-[50%] mx-auto text-center mb-10 bg-white text-black font-bold transition-all duration-100 ease-in-out border-4 border-black [&>*]:border-black [&>*]:border-[1px]">
              {["Topics", "Tests", "Highscores"].map((cat, i) => {
                return (
                  <div
                    key={i}
                    className={
                      (tab.toString() == cat ? "bg-black text-white" : "") +
                      " p-2"
                    }
                  >
                    <button
                      onClick={() => {
                        setTab(cat as Tab);
                      }}
                    >
                      {cat}
                    </button>
                  </div>
                );
              })}
            </div>
            {tab == "Topics" ? (
              // Next step - Link to actual course pages and create training navigation within pages
              <div className=" [&>*]:p-10 p-10 flex-col   transition-all duration-1000 ease-in-out ">
                {courses.map((each, i) => {
                  return (
                    <DashboardTopic
                      max_pages={each.Max_Pages}
                      loading={loading}
                      key={i}
                      topic={each.Name}
                      progress={
                        userProfile?.Progress
                          ? Math.round(
                              (userProfile.Progress / each.Max_Pages) * 100
                            )
                          : 0
                      }
                      i={i + 1}
                    />
                  );
                })}
                {dev && (
                  <button
                    className="bg-black rounded-xl"
                    onClick={() => {
                      IncrementPage(1);
                    }}
                  >
                    Increment Course 1 Progress
                  </button>
                )}
              </div>
            ) : tab == "Highscores" ? (
              <div className="grid grid-rows-1 bg-transparent xl:mx-5 rounded-xl [&>*]:text-center xl:p-5 text-xs xl:text-base transition-all duration-1000 ease-in-out border-black">
                <div className="text-white grid grid-cols-3 p-5 border-gray-400 border-b-4 [&>*]:my-auto font-bold lg:text-xl">
                  <h1 className="font-bold">Game</h1>
                  <h1>Highscore</h1>
                  <h1>Action</h1>
                </div>

                <div className="text-white grid grid-cols-3 p-5 border-white border-b-2 [&>*]:my-auto">
                  <h1 className="font-bold">Attacker or Ally</h1>
                  <h1>
                    {userProfile?.Highscore != -1
                      ? userProfile?.Highscore + "%"
                      : "Not Completed Yet"}
                  </h1>
                  <Link href="/games/AttackerOrAlly">
                    <button className="bg-green-700 xl:w-1/3 mx-auto text-white hover:text-gray-300 p-5">
                      {userProfile?.Highscore != -1 ? "Replay" : "Play"}
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 w-11/12 mx-auto   [&>*]:p-5 rounded-xl text-white transition-all duration-1000 ease-in-out [&>*]:border-t-2 [&>*]:border-b-2 ">
                <div className="border-white border-r-2">
                  <h1 className="xl:text-3xl font-bold mb-5">Initial Test</h1>
                  <h1 className="font-extralight xl:text-base text-sm xl:h-1/4 h-1/2">
                    This test is designed to be taken at the start of your
                    ENCORE training journey. This should indicate your current
                    level of cybersecurity knowledge with regard to Industrial
                    Control Systems
                  </h1>
                  <div className="xl:grid xl:grid-cols-2 mt-10 gap-4 xl:gap-0 [&>*]:mx-5">
                    <h1 className="xl:text-base my-auto font-bold text-center text-sm ">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs mx-auto ">
                          {" "}
                        </span>
                      ) : userProfile?.Initial_Score != -1 ? (
                        "Previous Score - " + userProfile?.Initial_Score + "%"
                      ) : (
                        "Not Completed Yet"
                      )}
                    </h1>
                    <button
                      disabled
                      className="bg-red-900 p-3 font-bold text-white my-5 text-sm"
                    >
                      Can&apos;t retake this test
                    </button>
                  </div>
                </div>
                <div className="">
                  <h1 className="xl:text-3xl font-bold mb-5 ">Final Test</h1>
                  <h1 className="font-extralight xl:text-base text-sm xl:h-1/4">
                    This test is designed to be taken at the end of your ENCORE
                    training journey. This should indicate your final level of
                    cybersecurity knowledge with regard to Industrial Control
                    Systems
                  </h1>
                  <div className="xl:grid xl:grid-cols-2 mt-10 gap-2 xl:gap-0 [&>*]:mx-5">
                    <h1 className="xl:text-base my-auto font-bold text-center text-sm ">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs mx-auto ">
                          {" "}
                        </span>
                      ) : userProfile?.Final_Score != -1 ? (
                        "Previous Score - " + userProfile?.Final_Score + "%"
                      ) : (
                        "Not Completed Yet"
                      )}
                    </h1>
                    <button
                      disabled
                      className="bg-green-900 p-3 font-bold text-white my-5 text-sm"
                    >
                      Retry Test
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="bg-transparent flex flex-col">
              <div className="grid grid-cols-3 xl:w-[50%] mx-auto text-center mb-10 bg-white text-black font-bold transition-all duration-100 ease-in-out border-4 border-black [&>*]:border-black [&>*]:border-[1px]">
                {["Overview", "Employee Scores", "Cue Breakdown"].map(
                  (adCat, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          (adminTab.toString() == adCat
                            ? "bg-black text-white"
                            : "") + " p-2"
                        }
                      >
                        <button
                          onClick={() => {
                            setAdminTab(adCat as AdminTab);
                          }}
                        >
                          {adCat}
                        </button>
                      </div>
                    );
                  }
                )}
              </div>
              {adminTab == "Overview" ? (
                <div className="flex flex-row [&>*]:mx-10 mx-auto ">
                  <div id="stats" className="gap-2 flex flex-col mx-auto">
                    {/* TODO: This needs to be made dynamic */}
                    <AdminStat
                      text="of your employees can correctly identify all of the phishing scams in
        their inbox"
                      colour="green"
                      percentage={84}
                    />
                    <AdminStat
                      text="of your employees gave away their personal details"
                      colour="green"
                      percentage={0}
                    />
                    <AdminStat
                      text="of your employees did not report a phishing email"
                      colour="red"
                      percentage={64}
                    />
                  </div>
                </div>
              ) : adminTab == "Cue Breakdown" ? (
                <div className="flex m-5 bg-white/30 isolate backdrop-blur-sm shadow-lg ring-1 ring-black/5 p-5 rounded-xl font-bold">
                  <div className="mx-auto text-center text-black flex flex-col w-1/4">
                    <h1>Cues spotted by users</h1>
                    <AdminPieChart />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col text-center">
                  <div className="flex flex-row mx-5">
                    {["ID", "Date", "Score", "Feedback"].map((each, i) => {
                      return (
                        <h1 className="text-2xl w-1/4 font-bold" key={i}>
                          {each}
                        </h1>
                      );
                    })}
                  </div>
                  <div
                    id="EmployeeResults"
                    className="mx-5 my-2 gap-5 flex flex-col"
                  >
                    <EmployeeScore date={new Date()} percentage={60} id="1" />
                    <EmployeeScore date={new Date()} percentage={14} id="2" />
                    <EmployeeScore date={new Date()} percentage={89} id="3" />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    )
  );
}
