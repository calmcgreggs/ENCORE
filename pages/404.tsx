import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[80vh]">
      <div className="w-fit text-center font-bold text-2xl mx-auto justify-center align-middle my-auto">
        <div className="relative">
          <Image
            src="/404.gif"
            alt="Star Wars Meme"
            width="800"
            height="400"
            className="mx-auto"
          ></Image>
          <h1 className="mt-5 font-serif lg:absolute bottom-2 left-20 ">
            Error 404 : This is not the page you&apos;re looking for...
          </h1>
        </div>
        <Link href="/" className="btn btn-success mt-20 text-gray-300">
          Back to Safety!
        </Link>
      </div>
    </div>
  );
}
