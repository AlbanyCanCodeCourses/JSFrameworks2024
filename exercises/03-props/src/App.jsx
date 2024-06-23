import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App!</Heading>
      <Welcome name="Alisha" />
      <Welcome />
    </div>
  );
}

export default App;