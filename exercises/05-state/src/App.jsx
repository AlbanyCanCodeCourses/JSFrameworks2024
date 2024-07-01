import "./App.css";
import DiceRoller from "./components/DiceRoll/DiceRoll";
import LessText from "./components/LessText/LessText.jsx";
import Subscribe from "./components/Subscribe.jsx";


function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <Subscribe/>
        <LessText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi delectus ullam saepe, tempore pariatur eos doloremque vel porro. Tempore iure quam voluptatum quidem. 
        Odio fuga sint asperiores sit ex libero?"
          maxLenght={20} />
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
