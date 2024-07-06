// import React, { createContext, useState } from "react";

// const LanguageContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const LanguageProvider = ({ children }) => {
//   const [Language, setLanguage] = useState("en");

//   const switchLanguage = (lang) => {
//     setLanguage(lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ Language, switchLanguage }}>
//       <createContext/>
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageContext;
import { createContext } from "react";

const LanguageContext = createContext();

export default LanguageContext;
