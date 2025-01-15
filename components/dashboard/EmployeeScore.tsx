export default function EmployeeScore({
  pf,
  i,
}: {
  pf: UserProfile;
  i: number;
}) {
  //At some point, got to figure out viewing strategy, could do seperate URLs and use ID as slug?
  return (
    <div className="bg-slate-300 rounded-xl flex flex-row [&>*]:w-1/4 text-black py-2 font-bold ">
      <h1>{i}</h1>
      <h1>
        {pf.Initial_Score >= 0 ? pf.Initial_Score + "%" : "Not Completed Yet"}
      </h1>
      <h1>{pf.Mid_Score >= 0 ? pf.Mid_Score + "%" : "Not Completed Yet"}</h1>
      <h1>
        {pf.Final_Score >= 0 ? pf.Final_Score + "%" : "Not Completed Yet"}
      </h1>
    </div>
  );
}
