export default function EmployeeScore({
  id,
  date,
  percentage,
}: {
  id: string;
  date: Date;
  percentage: number;
}) {
  //At some point, got to figure out viewing strategy, could do seperate URLs and use ID as slug?
  return (
    <div className="bg-slate-300 rounded-xl flex flex-row [&>*]:w-1/4 text-black py-2 font-bold ">
      <h1>{id}</h1>
      <h1>{date.toDateString()}</h1>
      <h1>{percentage}%</h1>
      <div>
        <button className="bg-red-700 text-white px-10 rounded-xl">View</button>
      </div>
    </div>
  );
}
