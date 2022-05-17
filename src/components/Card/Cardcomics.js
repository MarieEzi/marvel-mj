import "./Card.css"

import React, { useState, useEffect } from "react";
import axios from "axios";

function Cardcomics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get ("http://localhost:4000/comics");
       
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
          {data.results.map((comic) => {
            return (
              <div key={comic._id} className="comics-list">
    <div className="card-container">
    <div className="btn">
           <button>
             <a href="./pages/Favoris.js">J'aime</a>
           </button>
         </div>
      <div className="image-container">
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""/>
      </div>
      
      <div className="card-content">
      <div className="card-title">
        <h2>
          {comic.title}
          </h2>
        <div className="card-description">
                <p>{comic.description}</p>
        </div>
         
      </div>
        </div>
    </div>

    </div>
          )})}
    </div>
      )}
    
    </div>
    )
  }


export default Cardcomics;