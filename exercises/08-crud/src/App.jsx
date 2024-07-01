// Import something here
import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryitem, setGroceryitem] = useState([]);
  const newGroceryItem = () => {
    setGroceryItem([...groceryitem, ""]);
  };//adding new item
  
  const GroceryList = () => {
  const [groceryitem, setGroceryitem] = useState([]);

  const newGroceryItem = () => {
    setGroceryitem([...groceryitem, ""]);
    console.log(setGroceryitem);
  };

  const UpdateItem = (userInput, index) => {
    const newGroceryItems = [...groceryitem];
    newGroceryItems[index] = userInput;
    setGroceryitem(newGroceryItems);
  };
  }
  const HandleSubmit = () => {
    e.prevent.Default();
  }
  
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={HandleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={groceryitem}
              onChange={(e) => {
                UpdateItem(e.target.value,index);
              }}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" onClick={newGroceryItem} className="btn btn-success">
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
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {/* Complete me */}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
