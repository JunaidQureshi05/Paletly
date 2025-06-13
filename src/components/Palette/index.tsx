import React from "react";
import ColorBox from "../ColorBox";
import "./Palette.css";
import { PaletteProps } from "../../types/Props";

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
