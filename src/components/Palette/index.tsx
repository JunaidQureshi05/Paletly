import React, { useState } from "react";

import "./Palette.css";
import { ColorFormat, GeneratedPallete } from "../../types/Colors";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "../ColorBox";
import Navbar from "../Navbar";

const Palette = ({ palette }: { palette: GeneratedPallete }) => {
  const [level, setLevel] = useState<number>(500);
  const [colorFormat, setColorFormat] = useState<ColorFormat>(ColorFormat.HEX);

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
        {palette.colors[level].map((color) => (
          <ColorBox color={color} colorFormat={colorFormat} />
        ))}
      </div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
