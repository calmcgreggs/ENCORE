import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto [&>*]:mx-auto pt-10 flex items-center justify-center">
      <SignIn />
    </div>
  );
}
