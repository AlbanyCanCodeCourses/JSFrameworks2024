import "./App.css";
// import something here
import {technologies} from './images/technologies';
import {phones} from './images/phones';

function App() {
  return <div className="App">
    <div>
      {technologies.map((technologies,index)
       => {
      const key = 'index-${index}';
      return <img src={technologies}
      width= "200" key={key} />;
    })} 
    </div>
    
  
  </div>;
}

export default App;
