// MiniPalette.tsx
import React from "react";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    "& hover": {
      cursor: "pointer",
    },
  } as const,
  color: {
    backgroundColor: "#dae1e4   ",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  } as const,
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",

    width: "100%",
  } as const,
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  } as const,
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  } as const,
};

const MiniPalette = (props: any) => {
  const { classes, name, emoji, colors } = props;
  const miniColorBoxes = colors.map((color: any) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root}>
      <div className={classes.color}>{miniColorBoxes}</div>
      <div className={classes.title}>
        <h5 className={classes.title}>
          {name} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
