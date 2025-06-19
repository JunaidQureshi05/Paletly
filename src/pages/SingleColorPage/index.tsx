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
import Navbar from "../../components/Navbar";

const SingleColorPage = () => {
  const { id, colorId } = useParams();
  let colors: Color[] = getShadesOfColor(id as string, colorId as string);
  const colorBoxes = colors.map((color) => (
    <ColorBox
      key={color.id}
      color={color}
      colorFormat={ColorFormat.RGB}
      isColorShade={true}
    />
  ));
  return (
    <div className="Palette">
      <Navbar isSingleColorPage={true} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPage;
