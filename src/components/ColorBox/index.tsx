import React, { useContext, useState } from "react";
import "./ColorBox.css";
import copy from "copy-to-clipboard";
import { Color, ColorFormat } from "../../types/Colors";
import { clsx } from "../../utils/common";
import { configContext } from "../../context/configs";
import { Link, useLocation } from "react-router";
import { WithStyles, withStyles, createStyles } from "@mui/styles";
import chroma from "chroma-js";
import { StyleProps } from "../../types/Props";
const styles = createStyles({
  ColorBox: {
    width: "20%",
    height: (props: StyleProps) => (props.isColorShade ? "50%" : "25%"),
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props: StyleProps) =>
      chroma(props.color.hex).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props: StyleProps) =>
      chroma(props.color.hex).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props: StyleProps) =>
      chroma(props.color.hex).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: 0,
    bottom: 0,
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props: StyleProps) =>
      chroma(props.color.hex).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0,
  },
});

type Props = {
  color: Color;
  colorFormat: ColorFormat;
  isColorShade?: boolean;
} & WithStyles<typeof styles>;
const ColorBox = ({
  color,
  colorFormat,
  isColorShade = false,
  classes,
}: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { name, hex } = color;
  let value = color[colorFormat];

  const { playCopySound } = useContext(configContext);
  const location = useLocation();

  return (
    <div
      style={{ backgroundColor: hex }}
      className={classes.ColorBox}
      id="main-div"
      onClick={(e: any) => {
        playCopySound();
        setCopied(true);
        let paletteSection = window.document.querySelector(
          ".Palette-colors"
        ) as HTMLDivElement;
        if (paletteSection) {
          paletteSection.style.overflow = "hidden";
        }
        copy(color[colorFormat]);
        setTimeout(() => {
          setCopied(false);
          if (paletteSection) paletteSection.style.overflow = "auto";
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
        <h1 className={classes.copyText}>copied!</h1>
        <p className={classes.copyText}>{value}</p>
      </div>
      <div className="copy-container">
        <div className="box-content">
          <span className={classes.colorName}>{name}</span>
        </div>
        <button className={classes.copyButton}>Copy</button>
      </div>
      {!isColorShade && (
        <Link
          to={{ pathname: `${location.pathname}/${color.id}` }}
          className={classes.seeMore}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          More
        </Link>
      )}
    </div>
  );
};

export default withStyles(styles)(ColorBox);
