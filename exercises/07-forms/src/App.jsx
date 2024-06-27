import "./App.css";
// Import here
import { useState } from "react";
import countries from "./assets/countries.json";
import states from "./assets/states.json";

function App() {
  // object for useState for all the fields for the onChange
  const [formField, setFormField] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    signUpForNewsletter: false,
  });

  // handle the change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormField({...formField,
      [name]: type === "checkbox" ? checked: value,
    });
  };

  // display results after submitting form
  const submission = (e) => {
    e.preventDefault();
    setDisplayResults(true);
  };

  const [displayResults, setDisplayResults] = useState(false);

  return (
    <form className="container mt-4" method="POST" onSubmit={submission}>
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={formField.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={formField.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={formField.addressLine1}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" value={formField.city} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select id="state" name="state" className="form-control" value={formField.state} onChange={handleChange}>
          {states.map((state) => {
            return (
              <option key={state} value={state}>{state}</option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={formField.zip}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control" value={formField.country} onChange={handleChange}>
          {countries.map((country) => {
            return (
              <option key={country} value={country}>{country}</option>
            );
          })}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          checked={formField.newsletter}
          onChange={handleChange}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {displayResults && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            <li>First Name: {formField.firstName}</li>
            <li>Last Name: {formField.lastName}</li>
            <li>Address: {formField.addressLine1}, {formField.city}, {formField.city}, {formField.state} {formField.postalCode}, {formField.country}</li>
            <li>Newsletter: {formField.signUpForNewsletter ? "Thank you for signing up for our newsletter!" : "Please sign up for our newsletter."}</li>
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
