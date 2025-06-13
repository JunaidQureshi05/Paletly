import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./components/Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./utils/color";
function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColor[4])} />
    </div>
  );
}

export default App;
