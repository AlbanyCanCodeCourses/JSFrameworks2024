import Cats from "./components/Cats/Cats";
import SingleParentElement from "./components/SingleParentElement/SingleParentElement";
import Person from "./components/Person/Person";
import _Me_ from "./components/_Me_";

function App() {
  return (
    <div className="text-center">
      <div className="bg-secondary text-white pt-3 pb-1">
        <Cats />
      </div>
      <div className="bg-info pt-3 pb-1">
        <SingleParentElement />
      </div>
      <div className="pt-3 pb-3">
        <Person />
        <_Me_ />
      </div>
    </div>
  );
}

export default App;
