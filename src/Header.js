import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderCard from "./HeaderCard";

function NasaDate(props) {
    const [date, setDate] = useState(0);
    // useEffect(() => {
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    //     .then(response => {
    //         console.log(response.data);
    //         setDate(response.data.date);
    //     })
    //     .catch(error => {
    //         console.log("the data was not returned", error)
    //     })
    // }, [])

    return (
        <HeaderCard>
            {props.dat}
        </HeaderCard>
    )
}

export default NasaDate;