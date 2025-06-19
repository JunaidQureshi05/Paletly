import React from "react";
import { Link, useNavigate, useParams } from "react-router";
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
import PaletteFooter from "../../components/PaletteFooter";

const SingleColorPage = () => {
  const { id, colorId } = useParams();
  let { paletteName, emoji } = findColorPallete(id as string)!;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // goes back in history
  };

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
      <div className="SingleColorPalette Palette-colors">
        {colorBoxes}{" "}
        <div className="go-back ColorBox">
          <button className="back-button" onClick={handleBack}>
            Go Back
          </button>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default SingleColorPage;
