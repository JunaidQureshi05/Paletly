import Slider from "rc-slider";
import "./Navbar.css";

const Navbar = ({
  level,
  setLevel,
}: {
  level: number;
  setLevel: (val: number) => void;
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
    </header>
  );
};

export default Navbar;
