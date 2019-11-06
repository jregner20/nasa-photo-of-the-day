import React, {useState, useEffect} from "react";
import axios from "axios";

function Explanation() {
    const [expl, setExplanation] = useState(0);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data);
            setExplanation(response.data.explanation);
        })
        .catch(error => {
            console.log("the data was not returned", error)
        })
    }, [])

    return (
        <div className="photoExplanation">
            {expl}
        </div>
    )
}

export default Explanation;