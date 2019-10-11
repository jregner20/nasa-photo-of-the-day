import React from "react";
import "./App.css";
// import styled from "styled-components";
import PhotoComp from "./components/Photo";
import TitleDateComp from "./components/Header";
import { BGCard } from "./components/BackgroundCard";

function App() {
  return (
    // <div className="App">
    <BGCard>
      <div>
        <TitleDateComp/>
      </div>  
      <div>
        <PhotoComp/>
      </div>
    </BGCard>
    // </div>
  );
}

export default App;
