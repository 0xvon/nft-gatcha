import { createContext, useContext, useState } from "react";
import { HideAndSeek as HideAndSeekType } from "../types/abis/HideAndSeek";

interface GamePlayState {
  hider: string | null;
  seeker: string | null;
  isPlaying: boolean;
  coodination: {
    x: number;
    y: number;
  };
}

interface AppState {
  address: string | undefined;
  hideAndSeek: HideAndSeekType | null;
  gamePlayState: GamePlayState; // gamePlayStateの型を適切に定義してください
}

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<
  [AppState, React.Dispatch<React.SetStateAction<AppState>>]
>([
  {
    address: undefined,
    hideAndSeek: null,
    gamePlayState: {
      hider: null,
      seeker: null,
      isPlaying: false,
      coodination: {
        x: 0,
        y: 0,
      },
    },
  },
  () => {},
]);

export const useAppProvider = () => useContext(AppContext);

export const AppProvider = (props: AppProviderProps) => {
  const [state, setState] = useState<AppState>({
    address: undefined,
    hideAndSeek: null,
    gamePlayState: {
      hider: null,
      seeker: null,
      isPlaying: false,
      coodination: {
        x: 0,
        y: 0,
      },
    },
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};
