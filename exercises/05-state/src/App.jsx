import "./App.css";
import DiceRoller from "./components/DiceRoll/DiceRoll";
import Subscribe from "./components/Subscribe/Subscribe";
import LessText from "./components/LessText/LessText";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        {/* Add LessText with props here */}
        <LessText text="Lorem ipsum dolor sit amet is placeholder text that doesn't really mean anything. Lorem comes from a Latin word, dolorem, meaning pain or suffering." maxLength={50} />
      </div>
      <div className="pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Dice Roll</h1>
          <DiceRoller />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Subscribe</h1>
        <Subscribe />
      </div>
    </>
  );
}

export default App;
