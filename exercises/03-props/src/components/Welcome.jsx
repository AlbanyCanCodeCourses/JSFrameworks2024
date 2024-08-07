import React from "react";
const Welcome = (props) => {
     const name = props.name ? props.name : "user";
    return (
        <>
          
            <p>Hello { name}</p></>
    )
}
export default Welcome;