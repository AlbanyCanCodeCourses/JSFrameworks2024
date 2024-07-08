// src/components/Login/Login.jsx
import React, { useContext } from "react";
import { TranslatorContext } from "../../contexts/TranslatorContext";
import translations from "./LoginTranslations.json";

function Login() {
  const { language } = useContext(TranslatorContext);
  const t = translations[language];

  if (!t) {
    return <div>Error: Translations not found for the selected language.</div>;
  }

  return (
    <div>
      <h1>{t["Login"]}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">{t["Email"]}</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">{t["Password"]}</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          {t["Login"]}
        </button>
      </form>
    </div>
  );
}

export default Login;
