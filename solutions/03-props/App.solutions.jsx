import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Heading from "../../exercises/03-props/src/Heading";

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
