// import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Results } from "./components/results/Results";
import { Timer } from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      {/* <Results /> */}
      <Timer />
    </div>
  );
}

export default App;
