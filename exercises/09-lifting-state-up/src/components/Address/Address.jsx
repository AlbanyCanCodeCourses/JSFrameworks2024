import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function Address() {
  const [displayResults, setDisplayResults] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signUp, didSignUp] = useState(false);
  const [formValues, setFormValues] = useState({});
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults formValues={formValues} signUp={signUp} /> : <AddressForm 
  
  lastName = {lastName} 
  setFirstName = {setFirstName} 
  setLastName = {setLastName}
  displayResults = {displayResults}
  setDisplayResults = {setDisplayResults}
  setFormValues={setFormValues}
  formValues={formValues}
  didSignUp={didSignUp}

  />
  }
  </>;
}

export default Address;
