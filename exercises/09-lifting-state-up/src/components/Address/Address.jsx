import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function Address() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const stateVarProps = {
    firstName,
    lastName,
    address,
    city,
    state,
    zipcode,
    country,
    newsletter
  }

  const props = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    zipcode,
    setZipcode,
    country,
    setCountry,
    newsletter,
    setNewsletter
  }
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults props={stateVarProps} /> : <AddressForm setDisplayResults={setDisplayResults} props={props} />}</>;
}

export default Address;
