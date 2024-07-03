import PropTypes from "prop-types";

function TemperatureScale({ scale, setScale }) {


  return <>
     <button
            className="btn btn-outline-primary"
            onClick={() => setScale("F")}
          >
            Fahrenheit
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setScale("C")}
          >
            Celsius
          </button>
    
   
  </>;
}

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired,
};

export default TemperatureScale;
