import React, { useState, useEffect } from "react";
import Cards from "./cards/Cards";
import NavBar from "./navBar/NavBar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {}, []);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if(exist){
            alert("ya existe")
          } else{
            setCharacters((oldChars) => [...oldChars, data]);
          }
          
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
