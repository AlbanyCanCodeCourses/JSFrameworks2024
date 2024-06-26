import Welcome from "./Welcome/Welcome"
import Heading from "./Heading/Heading"

function App(){

    
    return(
    <div className="App">
        <Welcome name="Joe" />
        <Welcome />
        <Heading>Welcome to my React App!</Heading>

    </div>
    );
}


export default App;
