import React, { useContext } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import CreateAccount from '../CreateAccount/CreateAccount';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { TranslatorProvider } from '../../contexts/TranslatorContext';
import Languages from '../Languages/Languages';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ThemeContext, { ThemeProvider } from '../../contexts/ThemeContext';
import ThemeChange from '../ThemeChange/ThemeChange';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles

function App() {
    const { themeStyle } = useContext(ThemeContext);

    return (
        <div className="App" style={themeStyle}>
            <TranslatorProvider>
                <ErrorBoundary>
                    <NavBar />
                    <div className="container pt-4 pb-4">
                        <ThemeChange />
                        <CreateAccount />
                    </div>
                    <Languages />
                    <Footer />
                    <Login />
                </ErrorBoundary>
            </TranslatorProvider>
        </div>
    );
}

export default App;
