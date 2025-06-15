import React from "react";
import palettes from "../../seedColor";
import { Link } from "react-router";
import "./HomePage.css";
import MiniPalete from "../../components/MiniPalette";
import MiniPalette from "../../components/MiniPalette";
const Home = () => {
  return (
    <div>
      <MiniPalete />
      {palettes.map((item) => (
        <MiniPalette {...item} />
      ))}
    </div>
  );
};

export default Home;
