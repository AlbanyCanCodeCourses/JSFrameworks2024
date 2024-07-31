import React from "react"

interface WelcomeProps{
  name?:string;
}

const Welcome:React.FC<WelcomeProps> = ( {name = "user"}) => {
    return <div>hello {name}</div>;
  };

export default Welcome;
