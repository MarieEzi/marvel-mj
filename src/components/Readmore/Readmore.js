import React, { useState,useEffect } from "react";
import "./readmore.css";
import axios from "axios";


function Readmore() {
const [showMore, setShowMore] = useState(false)
const [data, setData] = useState()

useEffect(() => {
    const fetchData = async () => {
      
        const response = await axios.get ("http://localhost:4000/characters");

        setData(response.data)
    
}
fetchData();
}, []);

  return (
    <div>
        <p>
            {showMore ? data : `${data.substring(0,250)}`}
            {data.results.map((character) => {
            return (
                <div key={character._id} className="comics-list">
                {character.description}
           
                </div>
                 )})}

            <button className="btn" onClick={()=> setShowMore(!showMore)}>
                {showMore ? "voir plus" : "voir moins"}
            </button>
        </p>
    </div>
  )
}

export default Readmore