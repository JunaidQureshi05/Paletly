import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./components/Palette";
import seedColor from "./seedColor";
function App() {
  return (
    <div>
      <Palette {...seedColor[2]} />
    </div>
  );
}

export default App;
