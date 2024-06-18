import "./App.css";
import React from "react";
import Welcome from "./components/Welcome.jsx";
import Heading from "./components/Heading.jsx";
// import something here

function App() {
  return <div className="App">
    <Welcome name=" Parvinder" />
    <Welcome />
        <Heading>Welcome to react app</Heading>

  </div>;
}

export default App;
