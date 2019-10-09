import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

export default function TitleDateComp() {
    const [date, setDate] = useState(0);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data);
            setDate(response.data.date);
        })
        .catch(error => {
            console.log("the data was not returned", error)
        })
    }, [])

    return (
    <div className="headerDiv">
        <h1>Photo of the Day</h1>
        <div className="date">{date}</div>
    </div>
    )
}