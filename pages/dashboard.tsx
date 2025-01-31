import AdminStat from "@/components/dashboard/AdminStat";
import EmployeeScore from "@/components/dashboard/EmployeeScore";
import AdminPieChart from "@/components/dashboard/PieChart";
import DashboardTopic from "@/components/dashboard/topic";
import courses from "@/data/courses";
import dev from "@/data/developer_mode";
import useGetAllUserProfiles from "@/hooks/useGetAllUserProfiles";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import useIncrementPageProgress from "@/hooks/useIncrementPageProgress";
import { useUser } from "@clerk/nextjs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState<
    UserProfile | null | undefined
  >();

  const { user, isLoaded } = useUser();
  const [adminView, setAdminView] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const [gameResults, setGameResults] = useState<Game_Result[]>();

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

  function sortMax(a: UserProfile, b: UserProfile) {
    if (a.Highscore < b.Highscore) {
      return 1;
    } else if (a.Highscore > b.Highscore) {
      return -1;
    } else {
      if (a.FastestTime < b.FastestTime) {
        return -1;
      } else if (a.FastestTime > b.FastestTime) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  function GetPFs() {
    useGetAllUserProfiles().then((ups) => {
      const sorted = ups.sort(sortMax);
      setUserProfiles(sorted);
    });
  }

  // function GetGRs() {
  //   useGetAllGameData().then((grs) => {
  //     setGameResults(grs);
  //   });
  // }

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

  // useEffect(() => {
  //   GetGRs();
  // }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPF();
  }, [user]);

  // useEffect(() => {
  //   console.log(userProfile);
  // }, [userProfile]);

  type Tab = "Topics" | "Tests" | "Highscores";
  type AdminTab =
    | "Overview"
    | "Phishing Objectives"
    | "Employee Scores"
    | "Cue Breakdown";

  const [tab, setTab] = useState<Tab>("Topics");
  const [adminTab, setAdminTab] = useState<AdminTab>("Overview");

  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    if (
      user &&
      user.organizationMemberships[0] &&
      user?.organizationMemberships[0]["role"] == "org:manager"
    ) {
      setIsAdmin(true);
      GetPFs();
    }
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
                  <h1 className="font-bold">User ID</h1>
                  <h1>Time Taken</h1>
                  <h1>Highscore</h1>
                </div>

                {userProfiles?.map((each, i) => {
                  if (
                    each.Highscore != -1 &&
                    each.FastestTime != -1 &&
                    each.FastestTime
                  )
                    return (
                      <div
                        className="text-white grid grid-cols-3 p-5 border-white border-b-2 [&>*]:my-auto"
                        key={i}
                      >
                        <h1 className="font-bold border-r-2">
                          {user?.primaryEmailAddress &&
                          each.UID == user?.primaryEmailAddress.toString()
                            ? "You"
                            : (i + 1).toString()}
                        </h1>
                        <h1 className="border-r-2">
                          {Math.floor(each.FastestTime / 60)} mins{" "}
                          {Math.floor(each.FastestTime % 60)
                            .toString()
                            .padStart(2, "0")}{" "}
                          seconds
                        </h1>
                        <h1>{each.Highscore}%</h1>
                      </div>
                    );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-3 w-11/12 mx-auto   [&>*]:p-5 rounded-xl text-white transition-all duration-1000 ease-in-out [&>*]:border-t-2 [&>*]:border-b-2 ">
                <div className="border-white border-r-2">
                  <h1 className="xl:text-3xl font-bold mb-5">Initial Test</h1>
                  <h1 className="font-extralight xl:text-base text-sm xl:h-1/4 h-1/2">
                    This test is designed to be taken at the start of your
                    ENCORE training journey. This should establish your baseline
                    level of phishing awareness.
                  </h1>
                  <div className="xl:grid xl:grid-cols-2 mt-10 gap-4 xl:gap-0 [&>*]:mx-5">
                    <h1 className="xl:text-base my-auto font-bold text-center text-sm ">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs mx-auto ">
                          {" "}
                        </span>
                      ) : userProfile?.Initial_Score != -1 ? (
                        "Initial Score - " + userProfile?.Initial_Score + "%"
                      ) : (
                        "Not Completed Yet"
                      )}
                    </h1>
                    {!loading &&
                      (userProfile?.Initial_Score != -1 ? (
                        <button
                          disabled
                          className="bg-red-900 p-3 font-bold text-white my-5 text-sm"
                        >
                          Can&apos;t retake this test
                        </button>
                      ) : (
                        <button className="bg-green-900 p-3 font-bold text-white my-5 text-sm">
                          <Link href="/tests/initial">Take Test</Link>
                        </button>
                      ))}
                  </div>
                </div>
                <div className="border-white border-r-2">
                  <h1 className="xl:text-3xl font-bold mb-5">
                    Mid-Training Test
                  </h1>
                  <h1 className="font-extralight xl:text-base text-sm xl:h-1/4 h-1/2">
                    This test is designed to be taken in the middle of your
                    ENCORE training journey. This should indicate your current
                    level of phishing awareness after the written training
                    section.
                  </h1>
                  <div className="xl:grid xl:grid-cols-2 mt-10 gap-4 xl:gap-0 [&>*]:mx-5">
                    <h1 className="xl:text-base my-auto font-bold text-center text-sm ">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs mx-auto ">
                          {" "}
                        </span>
                      ) : userProfile?.Mid_Score != -1 ? (
                        "Mid-Test Score - " + userProfile?.Mid_Score + "%"
                      ) : (
                        "Not Completed Yet"
                      )}
                    </h1>

                    {!loading &&
                      (userProfile?.Mid_Score != -1 ? (
                        <button
                          disabled
                          className="bg-red-900 p-3 font-bold text-white my-5 text-sm"
                        >
                          Can&apos;t retake this test
                        </button>
                      ) : userProfile.Initial_Score != -1 ? (
                        <button className="bg-green-900 p-3 font-bold text-white my-5 text-sm">
                          <Link href="/tests/mid">Take Test</Link>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="bg-red-900 p-3 font-bold text-white my-5 text-sm"
                        >
                          Can&apos;t take this test yet
                        </button>
                      ))}
                  </div>
                </div>
                <div className="">
                  <h1 className="xl:text-3xl font-bold mb-5 ">Final Test</h1>
                  <h1 className="font-extralight xl:text-base text-sm xl:h-1/4">
                    This test is designed to be taken at the end of your ENCORE
                    training journey. This should indicate your final level of
                    phishing awareness after completing both training mediums.
                  </h1>
                  <div className="xl:grid xl:grid-cols-2 mt-10 gap-2 xl:gap-0 [&>*]:mx-5">
                    <h1 className="xl:text-base my-auto font-bold text-center text-sm ">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs mx-auto ">
                          {" "}
                        </span>
                      ) : userProfile?.Final_Score != -1 ? (
                        "Final Score - " + userProfile?.Final_Score + "%"
                      ) : (
                        "Not Completed Yet"
                      )}
                    </h1>
                    {!loading &&
                      (userProfile?.Final_Score != -1 ? (
                        <button
                          disabled
                          className="bg-red-900 p-3 font-bold text-white my-5 text-sm"
                        >
                          Can&apos;t retake this test
                        </button>
                      ) : userProfile.Initial_Score != -1 &&
                        userProfile.Mid_Score != -1 ? (
                        <button className="bg-green-900 p-3 font-bold text-white my-5 text-sm">
                          <Link href="/tests/final">Take Test</Link>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="bg-red-900 p-3 font-bold text-white my-5 text-sm"
                        >
                          Can&apos;t take this test yet
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="bg-transparent flex flex-col">
              <div className="grid grid-cols-4 xl:w-[50%] mx-auto text-center mb-10 bg-white text-black font-bold transition-all duration-100 ease-in-out border-4 border-black [&>*]:border-black [&>*]:border-[1px]">
                {[
                  "Overview",
                  "Phishing Objectives",
                  "Employee Scores",
                  "Cue Breakdown",
                ].map((adCat, i) => {
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
                })}
              </div>
              {adminTab == "Overview" ? (
                <div className="flex flex-row [&>*]:mx-10 mx-auto ">
                  <div id="stats" className="">
                    <h1 className="text-3xl font-bold mb-5">
                      Attacker or Ally Overview
                    </h1>
                    <hr />
                    {userProfiles.length > 0 && (
                      <div className=" my-auto relative flex flex-row  w-[80vw] overflow-hidden no-scrollbar gap-10  p-10">
                        <div className="flex flex-col p-5 bg-slate-800 rounded-2xl w-1/2">
                          <h1 className="text-center mb-5 font-bold text-2xl mx-auto">
                            User Highscores (%)
                          </h1>
                          <BarChart
                            className="mx-auto"
                            width={400}
                            height={400}
                            title="Highscore per User"
                            data={userProfiles.map((each, i) => {
                              if (each.Highscore != -1)
                                return {
                                  UID: i + 1,
                                  Highscore: each.Highscore,
                                };
                            })}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="UID" label="User ID" />
                            <YAxis unit="%" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Highscore" fill="#8884d8" />
                          </BarChart>
                        </div>
                        <div className="flex flex-col p-5 bg-slate-800 rounded-2xl w-1/2">
                          <h1 className="text-center mb-5 font-bold text-2xl mx-auto">
                            User Complete Times (Seconds)
                          </h1>
                          <BarChart
                            className="mx-auto"
                            width={600}
                            height={400}
                            title="Fastest Time per User"
                            data={userProfiles.map((each, i) => {
                              if (each.Highscore != -1)
                                return {
                                  UID: i + 1,
                                  "Fastest Time Per User": each.FastestTime,
                                };
                            })}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="UID" label="User ID" />
                            <YAxis unit={"s"} />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Bar
                              dataKey="Fastest Time Per User"
                              fill="#34ab09"
                              unit={" seconds"}
                            />
                          </BarChart>
                        </div>
                      </div>
                    )}
                    {/* <h1>
                      Bar graph here, x axis for rounds, y axises to indicate
                      metric (time and percentage rate), two bars average time
                      taken
                    </h1> */}
                  </div>
                </div>
              ) : adminTab == "Phishing Objectives" ? (
                <div className="flex flex-col [&>*]:mx-10 mx-auto gap-5 ">
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
              ) : adminTab == "Cue Breakdown" ? (
                <div className="flex m-5 bg-white/30 isolate backdrop-blur-sm shadow-lg ring-1 ring-black/5 p-5 rounded-xl font-bold">
                  <div className="mx-auto text-center text-black flex flex-col w-1/4">
                    {/* TODO: This needs to be made dynamic */}
                    <h1>Cues spotted by users</h1>
                    <AdminPieChart />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col text-center">
                  <div className="flex flex-row mx-5">
                    {[
                      "ID",
                      "Initial Score",
                      "Mid-Test Score",
                      "Final Score",
                    ].map((each, i) => {
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
                    {userProfiles.map((each, i) => {
                      return <EmployeeScore pf={each} i={i + 1} key={i} />;
                    })}
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
