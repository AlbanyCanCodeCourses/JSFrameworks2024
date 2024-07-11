import { useState } from "react";

const CharacterCount = () => {
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setCount(c => c = e.target.value.length);
  }

  return (
    <>
      <h2>Records the amount of words you type!</h2>
      <textarea name="" id="char-count-input" onChange={handleChange} placeholder="Type here to see the character count change!" />
      <p>Character Count:
        <span> {count} </span>
      </p>
    </>
  )
}

export default CharacterCount;