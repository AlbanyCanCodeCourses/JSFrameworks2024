import React, {useState} from "react";



function LessText (props) {
    const [showText, setShowText] = useState(false);

    return (
        <>
            <div>
                
                <button onClick={()=> setShowText(true)}>
                    Read More
                </button>
                <button onClick={()=> setShowText(false)}>Read Less</button>
            </div>
            <p>{showText ?  props.text : props.text.substring(0, props.maxLength) + "..." }</p>
        </>
    );
}


export default LessText;