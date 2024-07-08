// src/components/App/App.jsx
import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import CreateAccount from '../CreateAccount/CreateAccount';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { TranslatorProvider } from '../../contexts/TranslatorContext';
import Languages from '../Languages/Languages';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <TranslatorProvider>
      <ErrorBoundary>
        <div className="App d-flex flex-column">
          <NavBar />
          <div className="container pt-4 pb-4">
            <CreateAccount />
          </div>
          <Languages />
          <div className="mt-auto">
            <Footer />
          </div>
          <Login />
        </div>
      </ErrorBoundary>
    </TranslatorProvider>
  );
}

export default App;
