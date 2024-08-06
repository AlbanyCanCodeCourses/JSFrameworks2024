import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */

  const [quote, setQuote] = useState(' ');
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Make an AJAX call with the useEffect hook
   */
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
      setIsLoading(false);
    } catch (error) {
      console.error(`There was an error: ${error}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
}, []);

return (
  <div className="bg-warning text-center">
    <img
      src={ronSwansonImage}
      alt="Ron Swanson"
      width="450"
      height="423"
      className="mt-4"
    />
    <div className="container">
      {isLoading ? <div>Loading ...</div> : (
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      )}
    </div>
  </div>
);
}

export default App;
