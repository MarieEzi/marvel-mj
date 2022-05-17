import React, { useState, useEffect } from "react";
import axios from "axios";
import "./modal.css"

function Modal () {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get ("http://localhost:4000/characters");
        setData(response.data);
      }
    
    fetchData();
});

  return (
    <div className="modal">
      <button onClick={() => setShow(true)}>+ d'infos</button>
      <div title="Mes comics" onClose={() => setShow(false)} show={show}>
      <div className="cards">
          {data.results.map((character) => {
            return (
              <div key={character._id} className="characters-list">
      <ul className="modal-list">
        <li>{character.comics}</li>
       </ul>
        </div>
        )})}
        </div>
    </div>
</div>
    )
  }



export default Modal;