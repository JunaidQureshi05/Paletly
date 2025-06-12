import React from "react";
import "./ColorBox.css";
const ColorBox = ({ color }: { color: { color: string; name: string } }) => {
  return (
    <div style={{ backgroundColor: color.color }} className="ColorBox">
      <span>MORE</span>
    </div>
  );
};

export default ColorBox;
