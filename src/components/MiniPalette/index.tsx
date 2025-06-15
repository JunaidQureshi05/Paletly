import React from "react";
import "./MiniPalette.css";
import { withStyles } from "@mui/styles";
import { style } from "@mui/system";
const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
};

const MiniPallete = (props: any) => {
  const { classes } = props;
  console.log(">>>", "Iam here", props);
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
    </div>
  );
};

export default withStyles(styles)(MiniPallete);
