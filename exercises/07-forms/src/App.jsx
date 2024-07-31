import "./App.css";
import { countries } from "./assets/countries";
import { states } from "./assets/states";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(false);
  const [signedup, setDidSignUp] = useState(false);
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(true);
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
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
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
        {/* Loop through the states you imported here */}
        <select 
        id="state" 
        name="state" 
        className="form-control"
        onChange={(e) => setState(e.target.value)}
        >
          {states.map((state, idx)=>{
              return(
                <option value={state} key = {`state=${idx}`}>
                {state}


            </option>

              )

          })}


        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          type="number"
          id="postalCode"
          name="postalCode"
          className="form-control"
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
        onChange={(e) => setCountry(e.target.value)}
      >

        {
          countries.map((country, idx) =>{
            return(
            <option value={country} key={`country-${idx}`}>
            {country}
          </option>
          )
          })
        }


        </select>
  
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          checked={signedup}
          onChange={(e) => setDidSignUp(e.target.checked)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {results && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {<li>first name:{firstName}</li>}
            {<li>Last name:{lastName}</li>}
            {<li>address:{addressLine1}</li>}
            {<li>city:{city}</li>}
            {<li>state:{state}</li>}
            {<li>postalCode:{postalCode}</li>}
            {<li>country: {country}</li>}
          </ul>
          <p>
            {signedup
              ? "Thank you for signing up for our newsletter!"
              : "Please sign up for our newsletter!"}
          </p>
        </div>
      )}
    </form>
  );
}

export default App;
