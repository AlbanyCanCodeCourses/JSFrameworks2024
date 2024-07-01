import "./App.css";
// import something here
import { technologies } from "./images/technologies.js";
import { phones } from "./images/phones.js";

function App() {
  return (
    <div className="App">
      <div>
        {technologies.map((technology, index) => {
        return <img src={technology} height="150" key={index} />;
        })};
      </div>
      <div>
        {Object.values(phones).map((phone, index) => {
        return <img src={phone} height="150" key={index} />;
        })};
      </div>
    </div>
  );
};

export default App;
