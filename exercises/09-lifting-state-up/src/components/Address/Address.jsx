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
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ?
    <AddressResults
      setDisplayResults={setDisplayResults}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      address={address}
      setAddress={setAddress}
      city={city}
      setCity={setCity}
      state={state}
      setState={setState}
      zipcode={zipcode}
      setZipcode={setZipcode}
      country={country}
      setCountry={setCountry}
      newsletter={newsletter}
      setNewsletter={setNewsletter}
    /> :
    <AddressForm
      setDisplayResults={setDisplayResults}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      address={address}
      setAddress={setAddress}
      city={city}
      setCity={setCity}
      state={state}
      setState={setState}
      zipcode={zipcode}
      setZipcode={setZipcode}
      country={country}
      setCountry={setCountry}
      newsletter={newsletter}
      setNewsletter={setNewsletter}
    />}</>;
}

export default Address;
