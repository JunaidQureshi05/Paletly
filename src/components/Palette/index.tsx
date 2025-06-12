import React from "react";
import ColorBox from "../ColorBox";
import "./Palette.css";
interface PaletteProps {
  colors: { name: string; color: string }[];
  emoji: string;
  id: string;
  paletteName: string;
}
const Palette = (palette: PaletteProps) => {
  console.log("@@@@", palette);
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-colors">
        {palette.colors.map((color) => (
          <ColorBox color={color} />
        ))}
      </div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
