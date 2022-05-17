import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Cardcharacters from '../Card/Cardcharacters';

function Pagination () {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/character?limit=100&page=${page}`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className='pagination'>

      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
      {data.results.map((character) => {
      
        return (
          <Link to={`/character/${character._id}`} key={character._id}>
          <div className="card">
           <Cardcharacters/>
          </div>
        </Link>
        );
      })}
    </div>
  );
};

export default Pagination;