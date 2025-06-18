import React, { useContext, useState } from "react";
import "./ColorBox.css";
import copy from "copy-to-clipboard";
import { Color, ColorFormat } from "../../types/Colors";
import { clsx } from "../../utils/common";
import { configContext } from "../../context/configs";
const ColorBox = ({
  color,
  colorFormat,
}: {
  color: Color;
  colorFormat: ColorFormat;
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { name, id, hex } = color;
  let value = color[colorFormat];

  const { playCopySound, isCopySoundPlaying } = useContext(configContext);
  return (
    <div
      style={{ backgroundColor: hex }}
      className="ColorBox"
      onClick={() => {
        copy(value);
        playCopySound();
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
    >
      <div
        className={clsx(["copied-overlay", copied && "show"])}
        style={{ background: hex }}
      />
      <div className={clsx(["copy-message", copied && "show"])}>
        <h1>copied!</h1>
        <p>{value}</p>
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
