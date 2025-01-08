import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GameContext = {
  roundScores: boolean[][][];
  setRoundScores: Dispatch<SetStateAction<boolean[][][]>>;
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  reflection: boolean;
  setReflection: Dispatch<SetStateAction<boolean>>;
  reflectionModalOpen: boolean;
  setReflectionModalOpen: Dispatch<SetStateAction<boolean>>;
  cueNo: number;
  setCueNo: Dispatch<SetStateAction<number>>;
};

const GameContext = createContext<GameContext | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [roundScores, setRoundScores] = useState<boolean[][][]>([]);
  const [round, setRound] = useState<number>(-1);
  const [reflection, setReflection] = useState(false);
  const [reflectionModalOpen, setReflectionModalOpen] = useState(false);
  const [cueNo, setCueNo] = useState(0);

  return (
    <GameContext.Provider
      value={{
        roundScores,
        setRoundScores,
        round,
        setRound,
        reflection,
        setReflection,
        reflectionModalOpen,
        setReflectionModalOpen,
        cueNo,
        setCueNo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): GameContext => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
