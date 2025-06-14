import React, { useState } from "react";

import "./Palette.css";
import { ColorFormat, GeneratedPallete } from "../../types/Colors";
import ColorBox from "../ColorBox";
import Navbar from "../Navbar";

const Palette = ({ palette }: { palette: GeneratedPallete }) => {
  const [level, setLevel] = useState<number>(500);
  const [colorFormat, setColorFormat] = useState<ColorFormat>(ColorFormat.HEX);
  const { paletteName, emoji, colors } = palette;
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <Navbar
        level={level}
        setLevel={setLevel}
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
      />

      <div className="Palette-colors">
        {colors[level].map((color) => (
          <ColorBox color={color} colorFormat={colorFormat} />
        ))}
      </div>
      <footer className="Palette-footer">
        {" "}
        {paletteName}Add commentMore actions
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
