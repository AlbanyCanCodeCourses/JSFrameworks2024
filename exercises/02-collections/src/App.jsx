import "./App.css";
import { phones } from "./images/phones.js";
import  { technologies } from "./images/technologies.js";
// import something here

function App() {
  return <div className="App">
    <div>
 {technologies.map((techy, index) => {
   return ( <img src={techy} width="200" key={index}></img>)
   
   
   })
    } 
    </div>
   
    <div>
      {Object.values(phones).map((link, index) => {
      return (
        <img src={link} key={index}  width="200"/>)
    })}
  </div>
    
  </div>;
  


  
}

export default App;
