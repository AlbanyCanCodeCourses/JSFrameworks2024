import "./App.css";
import { useState } from "react";
import states from "./assets/states.json";
import countries from "./assets/countries.json";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state"
          name="state"
          className="form-control"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
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
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-control"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {isSubmitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Address: {address}</li>
            <li>City: {city}</li>
            <li>State: {selectedState}</li>
            <li>Country: {selectedCountry}</li>
            <li>Zipcode: {zipcode}</li>
            <li>
              {newsletter
                ? "Thank you for signing up for our newsletter!"
                : "Please sign up for our newsletter!"}
            </li>
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;