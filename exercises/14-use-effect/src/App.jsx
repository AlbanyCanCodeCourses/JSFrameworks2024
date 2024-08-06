// import useEffect
import { useState, useEffect } from "react";

import "./App.css";
// import Axios (or use Fetch)
import axios from 'axios';

function App() {
  const[characterName, setCharacterName] = useState([]);
  const [name, setName] = useState("");
  const [Hyperlink, setHyperlink] = useState("");

  const [image, setImage] = useState(
    "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
  );

  /**
   * Set up state and make AJAX requests here
   */

  const fetchData = async (characterID) =>{
    try{
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`);
    //setCharacterName(data.results);
    //setImage(data.results.image)
    //console.log(data.image)
    setImage(data.image);
    setName(data.name);
    //setHyperlink(data.url);
    console.log(data);

    
    }
    catch(err){
      console.error(err);
    }
  };


  const fetchCharacters = async () =>{
    try{
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
    setCharacterName(data.results);

    }
    catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCharacters();
    
  }, []);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">

          <a href={Hyperlink}>
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src={image}
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" onChange={(e) => fetchData(e.target.value)}  type="text">
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
