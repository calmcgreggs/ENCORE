import dynamic from "next/dynamic";

const Game = dynamic(() => import("./TestGame"), {
  ssr: false,
});

export default function Test() {
  return <Game />;
}
