export type Color = {
  hex: string;
  id: string;
  name: string;
  rgb: string;
  rgba: string;
};

export type GeneratedPallete = {
  colors: {
    [k: string]: Color[];
  };
  emoji: string;
  id: string;
  paletteName: string;
};

export type Palette = {
  colors: { name: string; color: string }[];
  emoji: string;
  id: string;
  paletteName: string;
};
