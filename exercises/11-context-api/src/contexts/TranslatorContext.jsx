/* eslint-disable react/prop-types */
// src/contexts/TranslatorContext.js
import React, { createContext, useState } from 'react';

export const TranslatorContext = createContext();
// created context


//  a component that will wrap around other components to provide 
// them with the language state and functions.
export const TranslatorProvider = ({ children }) => {
  
 //state variables
  const [language, setLanguage] = useState('en');

  return (
    //this will makes the state and functions available to any child components that consume the context.
// value is an object containing the state variables and functions that need to be shared.
// {children} allows any nested components to access the context values.
    <TranslatorContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslatorContext.Provider>
  );
};
