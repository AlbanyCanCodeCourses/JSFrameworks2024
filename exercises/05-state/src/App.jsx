import "./App.css";
import DiceRoller from "./components/DiceRoll/DiceRoll";
// Import LessText here
import LessText from "./components/LessText/LessText";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl sit amet nisi ultricies posuere. Nullam sit amet ipsum nec nunc ultricies ultricies. Nullam sit amet ipsum nec nunc ultricies ultricies. Nullam sit amet ipsum nec nunc ultricies ultricies. Nullam sit amet ipsum nec nunc ultricies ultricies." maxLength={50} />
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
