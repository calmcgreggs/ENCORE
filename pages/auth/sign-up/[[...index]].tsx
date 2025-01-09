import { SignUp } from "@clerk/nextjs";

export default function Page() {

  return (
    <div className="mx-auto [&>*]:mx-auto p-10 flex items-center justify-center">
      <SignUp forceRedirectUrl={"/create-account"} />
    </div>
  );
}
