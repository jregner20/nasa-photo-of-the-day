import React from "react";
import "./App.css";
import NasaGrid from "./NasaGrid";
import NasaDate from "./Header";
import Explanation from "./Explanation";
import ExplanationCard from "./ExplanationCard";

function App() {
  return (
    <div className="App">
      <NasaDate/>
      <NasaGrid/>
      <ExplanationCard>
        <Explanation/>
      </ExplanationCard>
    </div>
  );
}

export default App;
