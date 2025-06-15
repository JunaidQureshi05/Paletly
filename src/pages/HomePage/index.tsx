import React from "react";
import seedColor from "../../seedColor";
import { Link } from "react-router";
import MiniPalette from "../../components/MiniPalette";
const HomePage = () => {
  return (
    <div>
      <h1>Paletly</h1>
      <div>
        {seedColor.map((palette) => (
          <Link to={{ pathname: `/palette/${palette.id}` }} key={palette.id}>
            <MiniPalette
              name={palette.paletteName}
              key={palette.id}
              emoji={palette.emoji}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
