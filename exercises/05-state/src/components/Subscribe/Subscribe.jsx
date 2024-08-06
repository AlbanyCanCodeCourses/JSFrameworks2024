import { useState } from 'react';


function Subscribe(){
    const [subscribed, setSubscribed] = useState(false);
    return(
  
    //should say please sub
    //or subscribed
    //assignment toggle what the button says by using the use state


    
  <button type="button" className="btn btn-dark mr-2" onClick ={()=>{setSubscribed(true)}}>{subscribed ? "subscribed!": "Please Subscribe"}</button>

    )
    
}

export default Subscribe