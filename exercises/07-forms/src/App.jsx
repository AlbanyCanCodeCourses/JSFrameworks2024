import "./App.css";
import { useState } from "react";
import countries from "../src/assets/countries.json";
import states from "../src/assets/states.json";
// Import here
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalcode] = useState("");
  const [signupletter, setSignupletter] = useState(false);
  const [isSubmitted, setIssubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setIssubmitted(true);
  }

  return (
    <form onSubmit={handleForm} className="container mt-4" method="POST">
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          value={lastname}
          type="text"
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
            setLastname(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          value={address}
          type="text"
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
            setAddress(e.target.value);
          }}
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
          value={city}
          name="city"
          type="text"
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
            setCity(e.target.value);
          }}
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
          value={state}
          onChange={(e) => {
            console.log(e.target.value);
            setState(e.target.value);
          }}
        >
          <option value="">Select a state</option>
          {states.map((state, index) => (
            <option value={state} key={index}>
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
          value={postalCode}
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
            setPostalcode(e.target.value);
          }}
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
          value={country}
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(e.target.value);
          }}
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option value={country} key={index}>
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
          checked={signupletter}
          className="form-check-input"
          onChange={(e) => {
            console.log(e.target.checked);
            setSignupletter(e.target.checked);
          }}
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
          <h4>Results:</h4>
          <ul className="list-unstyled mb-0">
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastname}</li>
            <li>Address: {address}</li>
            <li>City: {city}</li>
            <li>State: {state}</li>
            <li>Postal Code: {postalCode}</li>
            <li>Country: {country}</li>
            <li>Newsletter Signup: {signupletter ? "Yes" : "No"}</li>
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;