import React from "react";
import "./App.css";
import PhotoComp from "./components/Photo";
import TitleDateComp from "./components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <TitleDateComp/>
      </div>  
      <div>
        <PhotoComp/>
      </div>
    </div>
  );
}

export default App;
