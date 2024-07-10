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
function AddressForm({
  firstName,
  lastName,
  address,
  city,
  state,
  postalCode,
  country,
  setFirstName,
  setLastName,
  setAddress,
  setCity,
  setState,
  setPostalCode,
  setCountry,
  setNewsletter,
  setDisplayResults,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayResults(true);
  };
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   */
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
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
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option></option>
          {states.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
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
        <select
          id="country"
          name="country"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option></option>
          {countries.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>
      <div className="mb-3">
        <input
          id="confirm"
          name="confirm"
          type="checkbox"
          className="form-check-input"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          />
        <label htmlFor="confirm" className="form-check-label">
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
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  newsletter: PropTypes.bool.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  setPostalCode: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setNewsletter: PropTypes.func.isRequired,
  setDisplayResults: PropTypes.func.isRequired,
  // And others that you will need to pass in
  // To learn more about PropTypes, please refer to https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default AddressForm;
