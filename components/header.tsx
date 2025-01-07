import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

export default function Header() {
  const DashboardIcon = () => {
    return (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 01-11.3 0L261.7 352a8.03 8.03 0 010-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 01-79.2 0 55.95 55.95 0 010-79.2 55.87 55.87 0 0154.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 010-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 01-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z" />
      </svg>
    );
  };

  return (
    <div className="navbar bg-gray-900 flex flex-row">
      <Link className="btn btn-ghost xl:text-xl px-5" href="/">
        ENCORE Training Platform
      </Link>
      <div
        id="navbar"
        className="[&>*]:px-5 [&>*]:mx-5 ml-auto py-3 text-center xl:text-base text-xs"
      >
        {/* <Link href="/signup" className="hover:text-gray-400  rounded-lg py-2">
          Get Started
        </Link> */}
        <SignedIn>
          <div className="hidden xl:block ">
            <UserButton showName appearance={{ baseTheme: dark }}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Dashboard"
                  labelIcon={<DashboardIcon />}
                  href="/dashboard"
                ></UserButton.Link>
              </UserButton.MenuItems>
            </UserButton>
          </div>
          <div className="block xl:hidden ">
            <UserButton appearance={{ baseTheme: dark }}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Dashboard"
                  labelIcon={<DashboardIcon />}
                  href="/dashboard"
                ></UserButton.Link>
              </UserButton.MenuItems>
            </UserButton>
          </div>
        </SignedIn>
        <SignedOut>
          <Link href="/auth/sign-in" className=" btn btn-accent">
            Login
          </Link>
        </SignedOut>
      </div>
      {/* <div className="mr-auto">
        <button className="btn mr-auto">
          Sign In
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
