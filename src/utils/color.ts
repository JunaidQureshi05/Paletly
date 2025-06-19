import chroma from "chroma-js";
import { Color, GeneratedPallete, Palette } from "../types/Colors";
import seedColor from "../seedColor";

const levels: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starterPalette: Palette): GeneratedPallete {
  let newPalette: GeneratedPallete = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale: string[] = getScale(color.color && color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: `rgb(${chroma(scale[i]).rgb().join(", ")})`,
        rgba: `rgba(${chroma(scale[i]).rgba().join(", ")})`,
      });
    }
  }
  return newPalette;
}

function getRange(hexColor: string) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), end];
}

function getScale(hexColor: string, noOfColors: number): string[] {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(noOfColors);
}

export const findColorPallete = (id: string | number): Palette | undefined => {
  return seedColor.find((item) => item.id === id);
};

export const findColorShades = (
  shadeName: string,
  colors: { [key: string]: Color[] }
) => {
  return colors[shadeName];
};
export function gatherAllColors(palette: GeneratedPallete) {
  const colors: { [key: string]: Color[] } = {};
  let shades = palette.colors;
  for (let key in shades) {
    shades[key].forEach((color) => {
      if (colors[color.id]) {
        colors[color.id] = colors[color.id].concat(color);
      } else {
        colors[color.id] = [color];
      }
    });
  }

  return colors;
}

const compose =
  (...fns: Function[]) =>
  (initialValue: any) =>
    fns.reduceRight((acc, fn) => fn(acc), initialValue);

export const getShadesOfColor = (id: string, colorId: string) => {
  const fn = compose(
    findColorShades.bind(this, colorId),
    gatherAllColors,
    generatePalette,
    findColorPallete
  );
  return fn(id);
};
