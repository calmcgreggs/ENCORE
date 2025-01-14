import { Suspense, useEffect, useState } from "react";

export default function TestEmailHeader({
  from,
  subject,

}: {
  from: string;
  subject: string;

}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="">
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">From : </h1>
        <h1>{from}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">Subject : </h1>

        <h1>{subject}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold">Received : </h1>
        <Suspense key={hydrated ? "local" : "gmt"}>
          <h1>{new Date().toString()}</h1>
        </Suspense>
      </div>
    </div>
  );
}
