import React from "react";
import { useNavigate, useParams } from "react-router";
import { withStyles } from "@mui/styles";
import { Color, ColorFormat } from "../../types/Colors";
import { findColorPallete, getShadesOfColor } from "../../utils/color";
import Navbar from "../../components/Navbar";
import PaletteFooter from "../../components/PaletteFooter";
import ColorBox from "../../components/ColorBox";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  } as const,
  PaletteColors: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    overflow: "scroll",
  } as const,
  goBack: {
    width: "20%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
  } as const,
};

const SingleColorPage = ({ classes }: { classes: Record<string, string> }) => {
  const { id, colorId } = useParams();
  let { paletteName, emoji } = findColorPallete(id as string)!;
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  let colors: Color[] = getShadesOfColor(id as string, colorId as string);
  return (
    <div className={classes.Palette}>
      <Navbar isSingleColorPage={true} />
      <div className={classes.PaletteColors}>
        {colors.map((color) => (
          <ColorBox
            key={color.id}
            color={color}
            colorFormat={ColorFormat.RGB}
            isColorShade={true}
          />
        ))}
        <div className={classes.goBack}>
          <button onClick={handleBack}>Go Back</button>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPage);
