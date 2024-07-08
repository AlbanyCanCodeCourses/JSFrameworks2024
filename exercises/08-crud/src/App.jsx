// Import something here
import "./App.css";
import {useState} from "react";

const GroceryList = () => {
const [groceryName, setGroceryName] = useState("");
const [cost, setCost] = useState("");
const [hasError, setHasError] = useState("")
  const [list, setList] = useState([
    {groceryName: "Bananas", cost:5.99},
    {groceryName: "Apples", cost:1.33}
   ]);

   const addItem = () =>{
     const newItem = {
       groceryName,
       cost: parseFloat(cost)
      };
      setList([...list, newItem]);
      
   };
   
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (groceryName &&(cost || cost === 0)){
      addItem();
      setHasError(false);
    }else setHasError(true);
   };
  
  const deleteItem = (index) =>{
    setList(
      list.filter((_, i) => i !== index)
    )
  }


const findTotal = () =>{
 return list.reduce((total, item)=>{
  return total + item.cost;
 }, 0);
}


  const handleClear = ()=>{
    setList([]);

  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
             
              className = {hasError && !groceryName ? "is-invalid form-control" : "form-control"}
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value = {groceryName}
              onChange = {(e) => setGroceryName(e.target.value)}
            />

            {hasError && !groceryName && (
            <div className="invalid-feedback">
                Please enter a grocery item
              </div>
            )}
          </div>
          <div className="col">
            <input
              className = {hasError && !groceryName ? "is-invalid form-control" : "form-control"}
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value = {cost}
              onChange = {(e)=>setCost(e.target.value)}
            />
            {hasError && !cost && (
              <div className="invalid-feedback">
              Please enter a cost
            </div>
            )}
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
             {list.map((item, index)=>{
              
              return(
                <>
                <tr key = {index}>
                   <td>{item.groceryName}</td>
                   <td>{item.cost.toFixed(2)}</td>
                   <td>
                     <button aria-label="Delete" title="Delete" onClick={() => deleteItem(index)} >
                       &times;
                     </button>
                   </td>
                 </tr>
                 </>
              )

             })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${findTotal().toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
