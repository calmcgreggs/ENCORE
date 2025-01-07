import Link from "next/link";

export default function DashboardTopic({
  topic,
  progress,
  i,
  loading,
  max_pages
}: {
  topic: string;
  progress: number;
  i: number;
  loading: boolean;
  max_pages : number
}) {
  //

  function getPageFromPercent() {
      return Math.round((max_pages * progress) / 100);
   
  }
  return (
    <Link
      className={
        "text-center flex flex-col hover:bg-white hover:text-black transition-all duration-500 ease-in-out isolate backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/5 " +
        (progress == 100 ? "bg-green-700/40 " : "bg-red-700/40")
      }
      href={
        "/training/" +
        topic.split(" ").join("_") +
        "/" +
        (progress > 0 ? getPageFromPercent() : 1)
      }
    >
      {"Topic " + i + " : " + topic}
      <progress
        className="progress w-full mt-5 mb-2"
        value={progress || 0}
        max="100"
      />
      {loading ? (
        <span className="loading loading-spinner loading-xs mx-auto "></span>
      ) : (
        <h1>{progress || 0}% Completed</h1>
      )}
    </Link>
  );
}
