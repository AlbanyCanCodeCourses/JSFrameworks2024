/* eslint-disable react/prop-types */
// src/contexts/TranslatorContext.js
import React, { createContext, useState } from 'react';

export const TranslatorContext = createContext();

export const TranslatorProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <TranslatorContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslatorContext.Provider>
  );
};
