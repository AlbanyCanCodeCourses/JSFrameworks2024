import "./App.css";
import DiceRoller from "./components/DiceRoll/DiceRoll";
import LessText from "./components/LessText/LessText";

function App() {
  const sampleLoremText = "Praesent metus diam, laoreet non quam eu, luctus maximus ante. Donec lorem nisl, fermentum ac eros in, feugiat lacinia est. Phasellus dictum nunc eget ligula euismod efficitur.";
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text={sampleLoremText} maxLength={30} />
      </div>
      <div className="pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Dice Roll</h1>
          <DiceRoller />
        </div>
      </div>
    </>
  );
}

export default App;
