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
  color: { backgroundColor: "grey" } as const,
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
  emoji: {} as const,
};

const MiniPalette = (props: any) => {
  const { classes, name, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.color}></div>
      <div className={classes.title}>
        <h5 className={classes.title}>
          {name} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
