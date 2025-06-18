import React, { useContext, useEffect, useRef } from "react";
import "./App.css";
import PalettePage from "./pages/PalettePage";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { configContext } from "./context/configs";
function App() {
  const { copySoundRef } = useContext(configContext);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palette/:id" element={<PalettePage />} />
      </Routes>
      <audio
        src="/copy-sound.wav"
        id="copy-audio"
        ref={copySoundRef}
        controls
      />
    </React.Fragment>
  );
}

export default App;
