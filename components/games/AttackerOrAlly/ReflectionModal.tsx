import { useGameContext } from "@/context/GameContext";
import { Reflections } from "@/data/games/AttackerOrAlly";

export default function ReflectionModal({
  cue,
  found,
  index,
  nonsensebad,
  nonsensegood,
}: {
  cue?: string;
  found?: boolean;
  index?: number;
  nonsensegood?: string;
  nonsensebad?: string;
}) {
  const { reflection, reflectionModalOpen, setReflectionModalOpen, cueNo } =
    useGameContext();

  return (
    <div
      className={
        "font-normal text-center bg-black/30 text-white isolate h-1/2 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/5 mx-4 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 " +
        (reflectionModalOpen && reflection && cueNo == index
          ? "absolute"
          : "hidden")
      }
      //   onMouseLeave={() => {
      //     setReflectionModalOpen(false);
      //   }}
    >
      <h1 className="">
        {cue
          ? nonsensebad && nonsensegood
            ? found
              ? nonsensegood
              : nonsensebad
            : found
            ? Reflections[cue].Good
            : Reflections[cue].Bad
          : "No Reflection Available"}
      </h1>
      <button
        className="mx-auto px-5 py-2 mt-5 bg-green-700 font-semibold rounded-xl text-white"
        onClick={() => {
          setReflectionModalOpen(false);
        }}
      >
        Got it!
      </button>
    </div>
  );
}
