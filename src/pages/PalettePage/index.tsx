import React, { useState } from "react";

import "./PalettePage.css";
import { ColorFormat, GeneratedPallete, Palette } from "../../types/Colors";
import ColorBox from "../../components/ColorBox";
import Navbar from "../../components/Navbar";
import seedColor from "../../seedColor";
import { useParams } from "react-router";
import { generatePalette } from "../../utils/color";

const PalettePage = () => {
  const { id } = useParams();
  const palette: Palette = seedColor.find((item) => item.id === id)!;
  const generatedPalette: GeneratedPallete = generatePalette(palette);
  const [level, setLevel] = useState<number>(500);
  const [colorFormat, setColorFormat] = useState<ColorFormat>(ColorFormat.HEX);
  const { paletteName, emoji, colors } = generatedPalette;
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <Navbar
        level={level}
        setLevel={setLevel}
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
        isSoundOn={isSoundOn}
        setIsSoundOn={setIsSoundOn}
      />

      <div className="Palette-colors">
        {colors[level].map((color) => (
          <ColorBox key={color.id} color={color} colorFormat={colorFormat} />
        ))}
      </div>
      <footer className="Palette-footer">
        {paletteName}Add commentMore actions
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default PalettePage;
