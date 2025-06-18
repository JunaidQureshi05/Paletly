import React, { useContext, useState } from "react";
import "./ColorBox.css";
import copy from "copy-to-clipboard";
import { Color, ColorFormat } from "../../types/Colors";
import { clsx } from "../../utils/common";
import { configContext } from "../../context/configs";
import { Link, useLocation } from "react-router";
const ColorBox = ({
  color,
  colorFormat,
}: {
  color: Color;
  colorFormat: ColorFormat;
}) => {
  console.log(color);
  const [copied, setCopied] = useState<boolean>(false);
  const { name, id, hex } = color;
  let value = color[colorFormat];

  const { playCopySound, isCopySoundPlaying } = useContext(configContext);
  const location = useLocation();
  return (
    <div
      style={{ backgroundColor: hex }}
      className="ColorBox"
      id="main-div"
      onClick={(e: any) => {
        console.log("inside main click function");
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
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <div
        className={clsx(["copy-message", copied && "show"])}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1>copied!</h1>
        <p>{value}</p>
      </div>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <Link
        to={{ pathname: `${location.pathname}/${color.id}` }}
        className="see-more"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        More
      </Link>
    </div>
  );
};

export default ColorBox;
