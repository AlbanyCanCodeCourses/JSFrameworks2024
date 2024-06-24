
import { useState } from 'react';

function CharacterCount() {
    const [value, setValue] = useState("");
    const count = value.length;

  return ( 
    <>
        <textarea 
            name="" 
            id="" 
            className="form-control"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            ></textarea>
        <p>Character count: {count}</p>
    </>
  );
}

export { CharacterCount };