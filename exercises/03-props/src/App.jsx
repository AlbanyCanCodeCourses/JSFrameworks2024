import "./App.css";
// import something here
import Welcome from "./Welcome";
import Heading from "./Heading";

function App() {
  return <div className="App">{
    <>
    <Welcome name={"Megan"} />
    <Welcome />
    <Heading>Welcome to my React App</Heading>
    </>
  }</div>;
}

export default App;
