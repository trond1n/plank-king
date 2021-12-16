// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Info } from "./components/info/Info";
import { Main } from "./components/main/Main";
import { Results } from "./components/results/Results";
import { Timer } from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/results" element={<Results />} />
        <Route path="/info" element={<Info />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
