import React from "react";
import "./App.css";
import AccordianSections from "./components/AccordianSection.jsx";

function App() {
  return <div className="ui styled accordion">
  
  
      <AccordianSections
        title="What is React used for?"
        paragraph="React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development. React Native, a framework based on React, is specifically designed for mobile app development, while React Desktop allows you to create desktop applications using web technologies."
        isOpen={false}
      />
  </div>;
}

export default App;
