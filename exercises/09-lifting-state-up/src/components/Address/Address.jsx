import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function Address() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [didSignUp, setDidSignUp] = useState(false);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayResults(true);
  }
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults
    props={{
      setDisplayResults,
      firstName,
      lastName,
      addressLine1,
      city,
      state,
      postalCode,
      country,
      didSignUp
    }}
  /> : <AddressForm props={{
    displayResults,
    setDisplayResults,
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
    handleSubmit
  }} />}</>;
}

export default Address;
