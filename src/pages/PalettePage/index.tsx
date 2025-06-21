import React, { useContext } from "react";
import { withStyles } from "@mui/styles";

import { ColorFormat, GeneratedPallete, Palette } from "../../types/Colors";
import ColorBox from "../../components/ColorBox";
import Navbar from "../../components/Navbar";
import seedColor from "../../seedColor";
import { useParams } from "react-router";
import { findColorPallete, generatePalette } from "../../utils/color";
import { configContext } from "../../context/configs";
import PaletteFooter from "../../components/PaletteFooter";

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
};

const PalettePage = ({ classes }: { classes: Record<string, string> }) => {
  const { id } = useParams();
  const palette: Palette = findColorPallete(id as string)!;
  const generatedPalette: GeneratedPallete = generatePalette(palette);
  const { paletteName, emoji, colors } = generatedPalette;
  const { level, colorFormat } = useContext(configContext);

  return (
    <div className={classes.Palette}>
      <Navbar />
      <div className={classes.PaletteColors}>
        {colors[level].map((color) => (
          <ColorBox key={color.id} color={color} colorFormat={colorFormat} />
        ))}
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(PalettePage);
