import "./Navbar.css";
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  Slider,
  Snackbar,
} from "@mui/material";
import { ColorFormat } from "../../types/Colors";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import { configContext } from "../../context/configs";

const Navbar = ({
  level,
  setLevel,
  colorFormat,
  setColorFormat,
}: {
  level: number;
  setLevel: (val: number) => void;
  colorFormat: ColorFormat;
  setColorFormat: (val: ColorFormat) => void;
}) => {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  function closeSnackbar(): void {
    setShowSnackbar(false);
  }
  const { isCopySoundOn, setIsCopySoundOn } = useContext(configContext);

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to={{ pathname: "/" }}>Paletly</Link>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            size="medium"
            defaultValue={level}
            onChange={(e: Event, newValue: number | number[]) => {
              setLevel(newValue as number);
            }}
            min={100}
            max={900}
            step={100}
            aria-label="Medium"
            valueLabelDisplay="off"
            color="success"
          />
        </div>
      </div>
      <div className="Sound-container">
        <span
          onClick={() => setIsCopySoundOn(!isCopySoundOn)}
          className="Sound-icon"
        >
          {isCopySoundOn ? <VolumeUp /> : <VolumeOff />}
        </span>
      </div>
      <div className="select-container">
        <Select
          onChange={(e: SelectChangeEvent) => {
            setColorFormat(e.target.value as ColorFormat);
            setShowSnackbar(true);
          }}
          variant="standard"
          sx={{
            fontSize: "0.8rem",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  fontSize: "0.8rem",
                },
              },
            },
          }}
          displayEmpty
          value={colorFormat}
        >
          <MenuItem value={"hex"}>HEX - #ffffff</MenuItem>
          <MenuItem value={"rgb"}>RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value={"rgba"}>RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={showSnackbar}
        autoHideDuration={1000}
        onClose={closeSnackbar}
        message={<span>Format changed !</span>}
        action={
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            aria-label="close"
            size="small"
          >
            <CloseIcon fontSize="small" aria-label="close" />
          </IconButton>
        }
      />
    </header>
  );
};

export default Navbar;
