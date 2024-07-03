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
function AddressResults(props) {

  const formatStateVars = {
    firstName: "First Name: ",
    lastName: "Last Name: ",
    address: "Address: ",
    city: "City: ",
    state: "State: ",
    zipcode: "Zipcode: ",
    country: "Country: ",
    newsletter: `${(props.newsletter ?
      "Thank you for subscribing to our newsletter!" :
      "Please consider subscribing to our newsletter!")}`
  }

  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">{
        Object.entries(props).filter(([propKey, value]) => propKey in formatStateVars).map(([formatPropKey, value], index) => {
          return <li key={index}>{formatStateVars[formatPropKey]} <strong>{value}</strong></li>
        })
      }</ul>
    </div>
  );
}

export default AddressResults;