import React from "react";
import seedColor from "../../seedColor";
import { Link } from "react-router";
import MiniPalette from "../../components/MiniPalette";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  } as const,
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  } as const,
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  } as const,
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  } as const,
};
const HomePage = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Paletly</h1>
        </nav>
        <div className={classes.palettes}>
          {seedColor.map((palette) => (
            <Link to={{ pathname: `/palette/${palette.id}` }} key={palette.id}>
              <MiniPalette
                name={palette.paletteName}
                key={palette.id}
                emoji={palette.emoji}
                colors={palette.colors}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(HomePage);
