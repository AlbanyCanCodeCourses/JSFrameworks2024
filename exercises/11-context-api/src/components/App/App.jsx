import React, { useContext } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import CreateAccount from '../CreateAccount/CreateAccount';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { TranslatorProvider } from '../../contexts/TranslatorContext';
import Languages from '../Languages/Languages';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ThemeContext, { ThemeProvider } from '../../contexts/ThemeContext.jsx';

function App() {
    const { themeStyle } = useContext(ThemeContext); // Ensure themeStyle is correctly accessed

    return (
        <ThemeProvider>
            <TranslatorProvider>
                <ErrorBoundary>
                    <div className="App" style={{ ...themeStyle }}>
                        <NavBar />
                        <div className="container pt-4 pb-4">
                            <CreateAccount />
                        </div>
                        <Languages />
                        <Footer />
                        <Login />
                    </div>
                </ErrorBoundary>
            </TranslatorProvider>
        </ThemeProvider>
    );
}

export default App;
