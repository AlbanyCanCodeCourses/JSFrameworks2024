import { useState } from "react";

const randomNumber = () => Math.floor(Math.random() * 10) + 1;

function GuessingTheNumber(){
const [answer, setAnswer] = useState(randomNumber())
const [guess, setGuess] = useState("");
const [message, setMessage] = useState("");

const handleGuess =() =>{
    if(guess === ""){
        setMessage("please add Number!");
        return;
    }

    const intUserGuess = parseInt(guess, 10);
if(intUserGuess< answer){
    setMessage(`Too low! The correct number was ${answer}`);
}else if(intUserGuess > answer) 
    setMessage(`Too high! The correct number was ${answer}`)
    else {
        setMessage("Correct! You win!");
    }


}

const handleReset = () =>{
setGuess("");
setMessage("");
setAnswer(randomNumber())
}



return(
    <div>
        <input
        type = "number"
        className="form-control"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        />
        
        <button onClick={handleGuess} > guess</button>
        <button onClick={handleReset}> Reset game</button>
        <p>{message}</p>
     </div>
)

}



export default GuessingTheNumber;



