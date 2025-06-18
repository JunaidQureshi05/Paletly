import React, { useContext, useEffect, useRef } from "react";
import "./App.css";
import PalettePage from "./pages/PalettePage";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { configContext } from "./context/configs";
import SingleColorPage from "./pages/SingleColorPage";
function App() {
  const { copySoundRef } = useContext(configContext);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palette/:id" element={<PalettePage />} />
        <Route path="/palette/:id/:colorId" element={<SingleColorPage />} />
      </Routes>
      <audio src="/copy-sound.wav" id="copy-audio" ref={copySoundRef} />
    </React.Fragment>
  );
}

export default App;
