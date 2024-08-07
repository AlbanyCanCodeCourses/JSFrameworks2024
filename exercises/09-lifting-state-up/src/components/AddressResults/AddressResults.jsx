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
function AddressResults({ props }) {
  const {
    firstName,
    lastName,
    addressLine1,
    city,
    state,
    postalCode,
    country,
    didSignUp,
    setDisplayResults
  } = props;
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {firstName && <li>{firstName}</li>}
            {lastName && <li>{lastName}</li>}
            {addressLine1 && <li>{addressLine1}</li>}
            {city && <li>{city}</li>}
            {state && <li>{state}</li>}
            {postalCode && <li>{postalCode}</li>}
            {country && <li>{country}</li>}
                        

      
           
          </ul>
          <p>
            {didSignUp
              ? "Thank you for signing up for our newsletter!"
              : "Please sign up for our newsletter!"}
          </p>
        </div>
      
      </ul>
    </div>
  );
}

export default AddressResults;
