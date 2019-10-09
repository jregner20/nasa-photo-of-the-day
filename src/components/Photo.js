import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

export default function PhotoComp() {
    const [photo, setPhoto] = useState(0);
    // return "hello there";
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data.url);
        })
        .catch(error => {
            console.log("the data was not returned", error)
        })
    }, [])

    return <img className="photo" src={photo}/>;

} 