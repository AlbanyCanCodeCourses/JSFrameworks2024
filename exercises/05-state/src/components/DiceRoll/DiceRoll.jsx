import dice1 from "./dice1.svg";
import dice2 from "./dice2.svg";
import dice3 from "./dice3.svg";
import dice4 from "./dice4.svg";
import dice5 from "./dice5.svg";
import dice6 from "./dice6.svg";
import { useState } from "react";

const images = { dice1, dice2, dice3, dice4, dice5, dice6 };

const generateRandomDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

function DiceRoller() {
  /**
   * Try refreshing the screen and see what happens.
   *
   * Refactor me. How can we make this update
   * after the user clicks on the "Roll" button?
   */
//  const diceNumber = generateRandomDiceNumber();

  const [diceNumber, setDiceNumber] = useState(generateRandomDiceNumber());
  const diceRoll = () => {
    setDiceNumber(generateRandomDiceNumber());
  }

  /**
   * Using "diceNumber", this selects a dice image.
   * So for example, if "diceNumber" is three,
   * this will select the image with three dots.
   */
  const src = images["dice" + diceNumber];
  const alt = `Dice ${diceNumber}`;
  return (
    <div>
      <div className="d-inline-flex flex-row align-items-center">
        <h1 className="p-2 h3">
          {diceNumber && (
            <img src={src} alt={alt} width="45" height="45" className="mb-2" />
          )}
          <div>
            {/* Complete me. When the user clicks on the button below, it should "roll the dice". */}
            <button className="btn btn-primary btn-sm" onClick={diceRoll}>Roll</button>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default DiceRoller;
