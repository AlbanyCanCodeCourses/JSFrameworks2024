// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from 'axios';

function App() {
  /**
   * Set up state and make AJAX requests here
   */

  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('');

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');

      setCharacters(response.data.results);
    } catch (error) {
    console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleCharacterSelect = (event) => {
    const characterId = event.target.value;
    const character = characters.find(c => c.id === parseInt(characterId));
    setSelectedCharacter(character);
  };

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{selectedCharacter ? selectedCharacter.name : 'Select a character'}</h1>
        <div id="main-img">
          <a href="{selectedCharacter.url}">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text" onChange={handleCharacterSelect}>
              <option></option>
              {characters.map((character) => (
                <option value={character.id} key={character.id}>{character.name}</option>
              ))};
              {/**
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
