import "./App.css";
import  Welcome from"./Welcome";
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Welcome name="Jamal" />
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
    </div>
  );
}

export default App;
