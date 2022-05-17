import React, { useState, useEffect } from "react";
import axios from "axios";



function info() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get ("http://localhost:4000/characters");
       
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <h1>En cours de chargement....</h1>
      ) : (
        <div className="cards">
          {data.results.map((character) => {
            return (
              <div key={character._id} className="characters-list">
        <div className="card-description">
               <p> {character.description}</p>
        </div>
    </div>
          )})}
    </div>
      )}
    
    </div>
    )
  }


export default info;