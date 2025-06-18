import React from "react";
import { useParams } from "react-router";
import {
  Color,
  ColorFormat,
  GeneratedPallete,
  Palette,
} from "../../types/Colors";
import {
  findColorPallete,
  gatherAllColors,
  generatePalette,
  getShadesOfColor,
} from "../../utils/color";
import ColorBox from "../../components/ColorBox";

const SingleColorPage = () => {
  const { id, colorId } = useParams();
  let palette: Palette = findColorPallete(id as string)!;
  let generatedPallete: GeneratedPallete = generatePalette(palette);
  let colors: Color[] = getShadesOfColor(id as string, colorId as string);
  const colorBoxes = colors.map((color) => (
    <ColorBox key={color.id} color={color} colorFormat={ColorFormat.RGB} />
  ));
  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPage;
