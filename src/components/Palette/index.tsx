import React from "react";

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
      <div className="Palette-colors">{/* Bunch of color boxes */}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
