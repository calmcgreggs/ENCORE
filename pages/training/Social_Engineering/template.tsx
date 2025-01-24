import PageLayout from "@/layouts/pagelayout";
import Link from "next/link";

export default function Template() {
  return (
    <PageLayout>
      <div className="text-center mt-10 px-10 [&>*]:my-10">
        <h1>Test your knowledge with the game, Attacker or Ally!</h1>

        <Link href="/games/AttackerOrAlly">
          <button className="btn btn-primary">Play Now</button>
        </Link>
      </div>
    </PageLayout>
  );
}
