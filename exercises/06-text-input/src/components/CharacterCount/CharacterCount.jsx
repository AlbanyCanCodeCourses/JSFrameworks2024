import { useState } from "react";

const CharacterCount = ()=>{
    const [text, setText] = useState("")
    return(
        <>
        <textarea
        className="form-control"
            value ={text}
            onChange =  {(e)=>setText(e.target.value)}
        />
        <p>Character Count: {text.length}</p>
</>
    )
}
export default CharacterCount;