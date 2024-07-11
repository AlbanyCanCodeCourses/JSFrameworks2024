import "./App.css";
import DiceRoller from "./components/DiceRoll/DiceRoll";
import LessText from "./components/LessText/LessText";
import Subscribe from "./components/Subscribe/Subscribe";
import CharacterCount from "../../06-text-input/src/components/CharacterCount/CharacterCount";
import GuessTheNumber from "../../06-text-input/src/components/GuessTheNumber/GuessTheNumber";

function App() {
  const sampleLoremText = "Praesent metus diam, laoreet non quam eu, luctus maximus ante. Donec lorem nisl, fermentum ac eros in, feugiat lacinia est. Phasellus dictum nunc eget ligula euismod efficitur.";
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text={sampleLoremText} maxLength={30} />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Dice Roll</h1>
          <DiceRoller />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 3 - Subscribe Button</h1>
          <Subscribe />
        </div>
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 4 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 5 - Guessing The Number</h1>
        <GuessTheNumber />
      </div>
    </>
  );
}

export default App;
