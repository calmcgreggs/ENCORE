export default function AdminStat({
  percentage,
  text,
  colour,
}: {
  percentage: number;
  text: string;
  colour: "red" | "green";
}) {
  return (
    <div className="flex flex-row items-center gap-5 text-left isolate backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/5 bg-black/30 p-4">
      <h1
        className={
          "w-1/4 text-6xl font-bold " +
          (colour == "red" ? "text-red-500" : "text-green-500")
        }
      >
        {percentage}%
      </h1>
      <h1 className="font-bold w-3/4">{text}</h1>
    </div>
  );
}
