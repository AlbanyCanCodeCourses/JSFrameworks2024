import "./App.css";
import { phones } from "./images/phones";
import { technologies } from "./images/technologies";

function App() {
  return (
    <>
      <div className="phones">
        {Object.entries(phones).map(([key, value]) => (<img src={value} key={key} alt="An image of a phone" />))}
      </div>
      <div className="technologies">
        {Object.entries(technologies).map(([key, value]) => (<img src={value} key={key} alt="An image of a piece of technology" />))}
      </div>
    </>
  )
}

export default App;
