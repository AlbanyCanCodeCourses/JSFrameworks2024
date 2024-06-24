import { useState } from "react";

const GuessTheNumber = () => {

  const getGameNum = () => Math.floor(Math.random() * 10 + 1);

  const [number, setNumber] = useState(getGameNum());
  const [message, setMessage] = useState('');
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState(true);

  const logicControlMessages = {
    winMsg: 'Great guess! Want to play again?',
    baseContextMsg: `The number was ${number}`,
    loseHighMsg: 'Too high! ',
    loseLowMsg: 'Too low! ',
    errorMsg: 'Error! Please enter a valid number between 1-10'
  }

  function resetHandler() {
    setNumber(getGameNum());
    setMessage('');
    setGuess('');
    setStatus(true);
  }

  function submitHandler() {
    if (!status) return;
    let isGuessValid = (guess >= 1 && guess <= 10);
    if (!isGuessValid) setMessage(logicControlMessages.errorMsg);
    else {
      let didUserWin = (number == guess ? true : false);
      if (didUserWin) setMessage(logicControlMessages.winMsg);
      else if (number < guess) setMessage(logicControlMessages.loseHighMsg + logicControlMessages.baseContextMsg);
      else if (number > guess) setMessage(logicControlMessages.loseLowMsg + logicControlMessages.baseContextMsg);
      setStatus(false);
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="number" value={guess} onChange={e => setGuess(e.target.value)} disabled={(!status) ? "disabled" : ""} />
      <button type="submit" onClick={submitHandler} disabled={(!status) ? "disabled" : ""}>Guess</button>
      <button type="reset" onClick={resetHandler}>Reset Game</button>
      <p>{(guess === '') ? '' : message}</p>
    </form>
  )
}

export default GuessTheNumber;