import React from "react";
import "./App.css";
import AccordionSection from "./AccordionSection";
import { content } from "./content/accordion.js";

function App() {
  return <div className="ui styled accordion">
    {content.map((accordionObj, key) => <AccordionSection isOpen={accordionObj.isOpen} title={accordionObj.title} content={accordionObj.content} key={key} />)}
  </div>;
}

export default App;
