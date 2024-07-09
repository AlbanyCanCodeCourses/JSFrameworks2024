/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const ThemeContext = createContext(); // Create the context correctly

export const ThemeProvider = ({ children }) => { // Use lowercase 'c' for children
   const [theme, setTheme] = useState("light");
    const themeStyle = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#333333' : '#ffffff',
    };
    const themeToggle = () =>
        setTheme(prevTheme =>
            (prevTheme === 'light' ? 'dark' : 'light'));
    
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme,themeStyle,themeToggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext; // Export the context correctly
