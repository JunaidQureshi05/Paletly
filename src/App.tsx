import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PalettePage from "./pages/PalettePage";
import seedColor from "./seedColor";
import { generatePalette } from "./utils/color";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/palette/:id" element={<PalettePage />} />
    </Routes>
  );
}

export default App;
