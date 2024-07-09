import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeChange = () => {
  const { theme, setTheme } = useContext(ThemeContext);
const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');

    return (
        <div>
            <button onClick={setLightTheme}>Light Theme</button>
            <button onClick={setDarkTheme}>Dark Theme</button>
        </div>
  );
};

export default ThemeChange;
