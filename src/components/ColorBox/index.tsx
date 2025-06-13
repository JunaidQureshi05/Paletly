import React, { useState } from "react";
import "./ColorBox.css";
import copy from "copy-to-clipboard";
import { Color } from "../../types/Colors";
import { clsx } from "../../utils/common";
const ColorBox = ({ color }: { color: Color }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { color: colorValue, name } = color;
  return (
    <div
      style={{ backgroundColor: colorValue }}
      className="ColorBox"
      onClick={() => {
        copy(color.color);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
    >
      <div
        className={clsx(["copied-overlay", copied && "show"])}
        style={{ background: colorValue }}
      />
      <div className={clsx(["copy-message", copied && "show"])}>
        <h1>copied!</h1>
        <p>{colorValue}</p>
      </div>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
};

export default ColorBox;
