import React from "react";
import "./ColorBox.css";
const ColorBox = ({ color }: { color: { color: string; name: string } }) => {
  return (
    <div style={{ backgroundColor: color.color }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{color.name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
};

export default ColorBox;
