import React from "react";
import "./ColorBox.css";
import copy from "copy-to-clipboard";
import { Color } from "../../types/Colors";
const ColorBox = ({ color }: { color: Color }) => {
  return (
    <div
      style={{ backgroundColor: color.color }}
      className="ColorBox"
      onClick={() => {
        copy(color.color);
      }}
    >
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
