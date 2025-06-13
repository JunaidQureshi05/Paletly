import React, { useState } from "react";

import "./Palette.css";
import { GeneratedPallete } from "../../types/Colors";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "../ColorBox";

const Palette = ({ palette }: { palette: GeneratedPallete }) => {
  const [level, setLevel] = useState<number>(500);
  console.log("HERE I AM ", palette);
  console.log("@@@@", palette);
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChangeComplete={(val: number | number[]) => {
            setLevel(val as number);
          }}
        />
      </div>

      <div className="Palette-colors">
        {palette.colors[level].map((color) => (
          <ColorBox color={color} />
        ))}
      </div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
