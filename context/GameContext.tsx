import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GameContext = {
  roundOne: boolean[][];
  setRoundOne: Dispatch<SetStateAction<boolean[][]>>;
  updateEmailFromIndex: (arr: boolean[], index: number) => void;
};

const GameContext = createContext<GameContext | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [roundOne, setRoundOne] = useState<boolean[][]>([]);

  function updateEmailFromIndex(arr: boolean[], index: number) {
    setRoundOne(
      roundOne.map((each, i) => {
        if (i == index) {
          return arr;
        } else {
          return each;
        }
      })
    );
  }

  return (
    <GameContext.Provider
      value={{ roundOne, updateEmailFromIndex, setRoundOne }}
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
