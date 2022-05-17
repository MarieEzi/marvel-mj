import React from 'react'
import Cardcharacters from "../components/Card/Cardcharacters"
import Searchbar from "../components/Searchbar/Searchbar"
import Pagination from '../components/Pagination/Pagination';


function Characters() {
  return (
    <div>
        <h1>Les personnages de Marvel</h1>
<Searchbar />
<Cardcharacters/>
        <Pagination />
      </div>
  );
}



export default Characters;