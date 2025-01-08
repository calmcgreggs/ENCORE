import { useGameContext } from "@/context/GameContext";

export default function ReflectionModal() {
  const { reflection, reflectionModalOpen, setReflectionModalOpen } =
    useGameContext();
  return (
    <div
      className={
        "font-normal text-center bg-black/10 isolate h-1/2 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/5 mx-4 xl:aspect-video w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 " +
        (reflectionModalOpen && reflection ? "absolute" : "hidden")
      }
      //   onMouseLeave={() => {
      //     setReflectionModalOpen(false);
      //   }}
    >
      <h1 className="">Reflection Words Here</h1>
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
