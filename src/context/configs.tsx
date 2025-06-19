import { createContext, JSX, useMemo, useRef, useState } from "react";
import { ColorFormat } from "../types/Colors";

type ContextType = {
  isCopySoundOn: boolean;
  setIsCopySoundOn: (val: boolean) => void;
  playCopySound: () => void;
  isCopySoundPlaying: boolean;
  copySoundRef: React.Ref<HTMLAudioElement>;
  level: number;
  setLevel: (val: number) => void;
  colorFormat: ColorFormat;
  setColorFormat: (val: ColorFormat) => void;
};

export const configContext = createContext<ContextType>({
  isCopySoundOn: true,
  setIsCopySoundOn: () => {},
  playCopySound: () => {},
  isCopySoundPlaying: false,
  copySoundRef: null,
  level: 500,
  setLevel: () => {},
  colorFormat: ColorFormat.HEX,
  setColorFormat: () => {},
});

function AppConfigContext({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isCopySoundOn, setIsCopySoundOn] = useState<boolean>(true);
  const [isCopySoundPlaying, setIsCopySoundPlaying] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(500);
  const [colorFormat, setColorFormat] = useState<ColorFormat>(ColorFormat.HEX);
  const copySoundRef = useRef<HTMLAudioElement>(null);

  function playCopySound(): void {
    if (copySoundRef.current && isCopySoundOn) {
      copySoundRef.current.pause();
      copySoundRef.current.currentTime = 0;
      copySoundRef.current.play().catch((e) => {
        console.error("Audio failed to play:", e);
      });
    }
  }

  let value: ContextType = {
    isCopySoundOn,
    setIsCopySoundOn,
    playCopySound,
    isCopySoundPlaying,
    copySoundRef,
    level,
    setLevel,
    colorFormat,
    setColorFormat,
  };
  return (
    <configContext.Provider value={value}>{children}</configContext.Provider>
  );
}

export default AppConfigContext;
