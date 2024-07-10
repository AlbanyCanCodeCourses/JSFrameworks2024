import "./App.css";
// import something here
import { technologies } from "./images/technologies";
import { phones } from "./images/phones"; 


function App() {
  return (
    <div className="App">
      {technologies.map((image, index) => (
        <img src={image} key={`technology-${index}`} />
      ))}
      {Object.values(phones).map((image, index) => (
        <img src={image} key={`phone-${index}`} />
      ))}
    </div>
  );
}

export default App;
