import React from "react";
import palettes from "../../seedColor";
import { Link } from "react-router";
import "./HomePage.css";
const Home = () => {
  return (
    <div>
      {palettes.map((item) => (
        <Link to={{ pathname: `/palette/${item.id}` }} key={item.id}>
          <h1>{item.paletteName}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Home;
