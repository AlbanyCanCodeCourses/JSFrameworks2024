import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
const ThemeChange = () => {
const { theme,themeToggle } = useContext(ThemeContext);
return (
       
         <div>
            <button onClick={themeToggle} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {theme === 'light' ? (
                    <FontAwesomeIcon icon={faSun} size="2x" color="#FFD700" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} size="2x" color="#4A4A4A" />
                )}
            </button>
        </div>

    );
};
export default ThemeChange;
