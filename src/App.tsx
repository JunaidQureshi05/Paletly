import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./components/Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./utils/color";
function App() {
  console.log("@@@@", generatePalette(seedColor[2]));
  return (
    <div>
      <Palette {...seedColor[2]} />
    </div>
  );
}

export default App;
