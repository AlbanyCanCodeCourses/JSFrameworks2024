import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my React App!</h1>
      <Welcome name="Chris" />
      <Welcome />
    </div>
  );
}

export default App;
