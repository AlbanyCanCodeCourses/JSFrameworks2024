import React from "react";
import PropTypes from "prop-types";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults({
  firstName,
  lastName,
  address,
  city,
  state,
  postalCode,
  country,
  newsletter,
}) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Address: {address}</li>
        <li>City: {city}</li>
        <li>State: {state}</li>
        <li>ZIP Code: {postalCode}</li>
        <li>Country: {country}</li>
        <li>Newsletter Signup: {newsletter ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}

AddressResults.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  newsletter: PropTypes.bool.isRequired,
};

export default AddressResults;
