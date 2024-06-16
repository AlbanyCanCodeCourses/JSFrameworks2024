/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Jokes = (props) => {
    console.log(props);
    // eslint-disable-next-line react/prop-types
    const { keydadjoke } = props;
    return (
        <>
            <p>hi,learning about props</p>
            
            
            {keydadjoke.map((dadjoke, index) => {
                return (
                    <div key={index}>
                        <p>{dadjoke.joke}
                        </p>
                        <p> {dadjoke.punchLine}
                        </p>
                        
                    </div>
                );
            })
            }

        </>
       
            
    
    )  
}
    
   
export default Jokes;