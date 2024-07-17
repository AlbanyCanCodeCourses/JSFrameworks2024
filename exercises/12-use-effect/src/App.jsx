// Import useEffect here
import { useEffect, useState } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [hasError, setHasError] = useState(false);
  /**
   * Make an AJAX call with the useEffect hook
   */
  const fetchQuote = async () => {
    setIsLoading(true);
  try {
    const { data } = await axios.get(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    setQuote(data[0]);
  }  catch (err) {
    setHasError(true);
  }
  setIsLoading(false);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <body className="bg-warning text-center">
      <img
        src={ronSwansonImage}
        alt=""
        width="450"
        height="423"
        className="mt-4"
      />
      <div className="container">
        {/* Display a loading message */}
        {isLoading && <div>Loading... </div>}
        {/* Display an error message if the API fails */}
        {hasError && (
          <div  className="error bg-white text-secondary border border-secondary mb-4">
          Oops! An unexpected error has occured.
          </div>
        )}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
