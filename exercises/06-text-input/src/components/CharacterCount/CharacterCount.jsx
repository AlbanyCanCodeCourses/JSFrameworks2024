import { useState } from "react";

function CharacterCount() {
    const [value, setValue] = useState('');

    return (
        <div>
            <textarea name="" id="" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
            <div>Number of characters: {value.length}</div>
        </div>
    )
}

export default CharacterCount;