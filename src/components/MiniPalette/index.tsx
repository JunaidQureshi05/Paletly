// MiniPalette.tsx
import React from "react";
import { createStyles, withStyles, WithStyles } from "@mui/styles";

const styles = createStyles({
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  color: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
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
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  titleText: {
    margin: "0px",
  },
});

type Color = {
  name: string;
  color: string;
};

type MiniPaletteProps = {
  name: string;
  emoji: string;
  colors: Color[];
} & WithStyles<typeof styles>;

const MiniPalette = ({ classes, name, emoji, colors }: MiniPaletteProps) => {
  const miniColorBoxes = colors.map((color) => (
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
        <h5 className={classes.titleText}>{name}</h5>
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
