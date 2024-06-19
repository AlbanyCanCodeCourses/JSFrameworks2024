import { useState } from "react";

const CharacterCount = () => {
  const [count, setCount] = useState(0);

  function handleChange(e) {
    let charCount = e.target.value.length;
    setCount(charCount);
  }

  return (
    <>
      <h2>Records the amount of words you type!</h2>
      <textarea name="" id="char-count" onChange={handleChange} placeholder="Type here to see the character count change!" />
      <p>Character Count:
        <span> {count} </span>
      </p>
    </>
  )
}

export default CharacterCount;