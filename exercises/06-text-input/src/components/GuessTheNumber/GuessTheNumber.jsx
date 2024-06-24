import { useState } from 'react';

function GuessingTheNumber(){

    const [guess, setGuess] = useState( 0 );
    const [output, setOutput] = useState("");
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);

    function getAnswer(guess, randomNumber) {
        console.log(guess, randomNumber);
        if (guess == randomNumber) {
            setOutput("Correct! Guess a new number between 1 and 10!");
            setRandomNumber(Math.floor(Math.random() * 10) + 1);
        } else if (guess < randomNumber) {
            setOutput("Too Low");
        } else if (guess > randomNumber) {
            setOutput("Too High");
        }
    }
    

    return (
        <>
        <label
            htmlFor="guess"
            className="form-label"
        >Guess a number between 1 and 10:</label>
            <input 
                type="text" 
                value={guess}
                className="form-control"
                onChange={(e) => setGuess(e.target.value)}
            />
            <button 
                className=""
                onClick={() => getAnswer(guess, randomNumber)}
            >Guess</button>
            <p>{output}</p>
        </>
    );
}

export { GuessingTheNumber };