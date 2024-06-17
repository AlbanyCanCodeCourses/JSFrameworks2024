import React from "react";
import "./App.css";
import AccordionSection from "./AccordionSection.jsx";
import { content } from "./content/accordion";

function App() {
  return <div className="ui styled accordion">
    {content.map((content) => (
      <AccordionSection
        title={content.title}
        content={content.paragraph || content.content}
        isOpen={content.isOpen}
      />
    ))}
  </div>;
}

export default App;

