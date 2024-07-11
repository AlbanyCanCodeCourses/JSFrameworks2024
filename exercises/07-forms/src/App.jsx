import "./App.css";
import { useState } from "react";
import countries from "./assets/countries.json";
import states from "./assets/states.json";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState(''); // City/Town
  const [province, setProvince] = useState(states[0]); // State
  const [postalCode, setPostalCode] = useState('');
  const [nation, setNation] = useState(countries[0]); // Country
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
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
          onChange={e => setFirstName(e.target.value)}
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
          onChange={e => setLastName(e.target.value)}
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
          onChange={e => setAddress(e.target.value)}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" value={region} onChange={e => setRegion(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select id="state" name="state" className="form-control" value={province} onChange={e => setProvince(e.target.value)}>
          {states.map((state, index) =>
            <option key={index} value={state}>{state}</option>
          )}
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
          value={postalCode}
          onChange={e => setPostalCode(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select id="country" name="country" className="form-control" value={nation} onChange={e => setNation(e.target.value)}>
          {countries.map((country, index) =>
            <option key={index} value={country}>{country}</option>
          )}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          value={newsletter}
          onChange={e => setNewsletter(!newsletter)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {submitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Full Name: {firstName + ' ' + lastName}</li>
            <li>Address: {address}</li>
            <li>Region: {region}</li>
            <li>State: {province}</li>
            <li>Zip Code: {postalCode}</li>
            <li>Country: {nation}</li>
            <p>{newsletter ? "Thanks for signing up for our newsletter!" : "Please sign up for our newsletter!"}</p>
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
