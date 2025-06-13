import Slider from "rc-slider";
import "./Navbar.css";
import { MenuItem, Select } from "@mui/material";
import { ChangeEvent } from "react";
import { ColorFormat } from "../../types/Colors";

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
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">Color Picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChangeComplete={(val: number | number[]) => {
              setLevel(val as number);
            }}
          />
        </div>
      </div>
      <div className="select-container">
        <Select
          onChange={(e) => {
            setColorFormat(e.target.value as ColorFormat);
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
    </header>
  );
};

export default Navbar;
