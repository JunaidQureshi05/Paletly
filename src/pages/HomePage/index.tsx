import React from "react";
import seedColor from "../../seedColor";
import { Link } from "react-router";
import MiniPalette from "../../components/MiniPalette";
import { createStyles, withStyles, WithStyles } from "@mui/styles";
import Branding from "../../components/Branding";

const styles = createStyles({
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    margin: "16px 0px",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
});

type HomePageProps = WithStyles<typeof styles>;

const HomePage = ({ classes }: HomePageProps) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <Branding />
        </nav>
        <div className={classes.palettes}>
          {seedColor.map((palette) => (
            <Link to={{ pathname: `/palette/${palette.id}` }} key={palette.id}>
              <MiniPalette
                name={palette.paletteName}
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
