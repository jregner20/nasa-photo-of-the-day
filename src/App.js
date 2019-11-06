import React from "react";
import "./App.css";
import NasaGrid from "./NasaGrid";
import NasaDate from "./Header";

function App() {
  return (
    <div className="App">
      <NasaDate/>
      <NasaGrid/>
      <p></p>
    </div>
  );
}

export default App;
