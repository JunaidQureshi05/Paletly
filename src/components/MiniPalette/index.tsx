// MiniPalette.tsx
import React from "react";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative" as const,
    border: "1px solid black",
    "& hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    margin: "0",
    color: "black",
    padding: "0.8rem",
    fontSize: "1rem",
    position: "relative" as const,
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};

const MiniPalette = (props: any) => {
  const { classes, paletteName, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
