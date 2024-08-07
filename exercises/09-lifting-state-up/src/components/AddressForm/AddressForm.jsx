import "./AddressForm.css";
import PropTypes from "prop-types";

import countries from "../../assets/countries";
import states from "../../assets/states";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - setDisplayResults()
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm({ props }) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    addressLine1,
    setAddressLine1,
    city,
    setCity,
    state,
    setState,
    postalCode,
    setPostalCode,
    country,
    setCountry,
    didSignUp,
    setDidSignUp,

    setDisplayResults
  } = props;



  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayResults(true);
  }
  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
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
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value=""></option>
          {states.map((state, idx) => {
            return (
              <option value={state} key={`state-${idx}`}>
                {state}
              </option>
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
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          name="country"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value=""></option>
          {countries.map((country, idx) => {
            return (
              <option value={country} key={`country-${idx}`}>
                {country}
              </option>
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
          checked={didSignUp}
          onChange={(e) => setDidSignUp(e.target.checked)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
                 

    </form>
  );
}

AddressForm.propTypes = {
  setDisplayResults: PropTypes.func.isRequired,
  
  // And others that you will need to pass in
  // To learn more about PropTypes, please refer to https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default AddressForm;
