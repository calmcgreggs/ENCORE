import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero max-h-screen h-screen bg-left"
      style={{
        backgroundImage: "url(/herobg.jpg)",
      }}
    >
      <div className="hero-content text-center bg-black/30 isolate h-1/2 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/5 mx-4 xl:aspect-video">
        <div className="max-w-2xl">
          <h1 className="xl:text-5xl text-3xl font-bold">Welcome to ENCORE</h1>
          <p className="py-6 text-sm xl:text-base">
            Enhanced Nuclear Cybersecurity for Optimization and Resilience
            Education (ENCORE) is a tool designed to interweave traditional
            knowledge-based nuclear cybersecurity training with a selection of
            engaging minigames and experiences
          </p>
          <SignedIn>
            <Link href="/dashboard">
              <button className="btn btn-primary mx-10">Open Dashboard</button>
            </Link>
            <Link href="/training/Social_Engineering/1">
              <button className="btn btn-secondary mx-10 ">
                I&apos;m a participant!
              </button>
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-up">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
