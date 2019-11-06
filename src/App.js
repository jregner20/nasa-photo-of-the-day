import React from "react";
import "./App.css";
import NasaGrid from "./NasaGrid";
import NasaDate from "./Header";
import Explanation from "./Explanation";

function App() {
  return (
    <div className="App">
      <NasaDate/>
      <NasaGrid/>
      <Explanation/>
    </div>
  );
}

export default App;
