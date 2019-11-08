import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaGrid from "./NasaGrid";
import NasaDate from "./Header";
import Explanation from "./Explanation";
import ExplanationCard from "./ExplanationCard";
import HeaderCard from "./HeaderCard";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => (
      setData(response.data)
    ))
    .catch(error =>(
      console.log(error)
    ))
  }, []);

  return (
    <div className="App">
      <NasaDate dat= {data.date}/>
      <NasaGrid pho= {data.url}/>
      <ExplanationCard>
        <Explanation exp= {data.explanation}/>
      </ExplanationCard>
    </div>
  );
}

export default App;
