import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./components/App/App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
<App />
    </ThemeProvider>
    
  </React.StrictMode>
);
