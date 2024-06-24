import { useState } from "react";



const GuessTheNumber = (props) => {
  const logicControlMessages = {
    winMsg: 'Great guess! Want to play again?',
    baseContextMsg: 'The number was ',
    loseHighMsg: 'Too high!',
    loseLowMsg: 'Too low!',
    errorMsg: 'Error! Please enter a valid number between 1-10'
  }

  const getGameNum = () => Math.floor(Math.random() * 10 + 1);

  const [version, setVersion] = useState(0);
  const [number, setNumber] = useState(getGameNum());
  const [message, setMessage] = useState('');
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState(true);

  function resetHandler() {
    setVersion(0);
    setNumber(getGameNum());
    setMessage('');
    setGuess('');
    setStatus(true);
  }

  function submitHandler() {
    if (!status) return;
    let isGuessValid = (guess >= 1 && guess <= 10);
    if (!isGuessValid) {
      setMessage(logicControlMessages.errorMsg);
      return;
    } else {
      let didUserWin = (number == guess ? true : false);
      if (didUserWin) setMessage(logicControlMessages.winMsg);
      else if (number < guess) setMessage(logicControlMessages.loseHighMsg + ' ' + logicControlMessages.baseContextMsg + number);
      else if (number > guess) setMessage(logicControlMessages.loseLowMsg + ' ' + logicControlMessages.baseContextMsg + number);
      setStatus(false);
    }
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()} key={version}>
        <input type="number" value={guess} onChange={e => setGuess(e.target.value)} disabled={(!status) ? "disabled" : ""} />
        <button type="submit" onClick={submitHandler} disabled={(!status) ? "disabled" : ""}>Guess</button>
        <button type="reset" onClick={resetHandler}>Reset Game</button>
        <p>{(guess === '') ? '' : message}</p>
      </form>
    </>
  )
}

export default GuessTheNumber;