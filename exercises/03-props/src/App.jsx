import "./App.css";
import Welcome from "./Welcome";
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App!</Heading>
      <Welcome name="Chris" />
    </div>
  );
}

export default App;
