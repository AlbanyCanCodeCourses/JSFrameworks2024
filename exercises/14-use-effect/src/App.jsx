// import useEffect
import { useState, useEffect } from "react";

import "./App.css";
// import Axios (or use Fetch)
import axios from 'axios';

function App() {
  const[characterName, setCharacterName] = useState([])
  const[characterID, setCharacterID] = useState("");
  /**
   * Set up state and make AJAX requests here
   */

  const fectchdata = async () =>{
    try{
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`);
    setCharacterName(data.results);

    }
    catch(err){
      console.error(err);
    }
  };


  useEffect(() => {
    fectchCharacters();
    
  }, [characterName]);

  const fectchCharacters = async () =>{
    try{
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
    setCharacterName(data.results);

    }
    catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    fectchCharacters();
    
  }, [characterName]);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">Rick</h1>
        <div id="main-img">

          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src="https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" onChange = {(e)=> {setCharacterID(e.target.value)}} value= {characterID} type="text">
              <option></option>
              {characterName.map((name) => {
          return(
              <option value={name.id} key={`character-${name.id}}`}>{name.name}</option>
        )
          
          })}
              {/* *
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
