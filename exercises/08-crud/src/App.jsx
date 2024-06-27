import { useState } from "react";
import React from "react";
import "./App.css";


const GroceryList = () => {
  const [groceryName, setGroceryName ] = useState("")
  const [groceryCost, setGroceryCost] = useState(Number(0));

  const [list, setList] = useState([
    { groceryName: "Bananas", cost: 5.99 },
    { groceryName: "Apples", cost: 2.99 }
  ]);

  const addItem = (item) => {
    const newItem = { groceryName: groceryName, cost: groceryCost };
    setList([...list, newItem]);
    newItem.cost = parseInt(newItem.cost);
    setTotal(sum(totalCost + newItem.cost));
  }

  const totalCost = list.reduce((totalCost, grocery) => totalCost + grocery.cost, 0);

  const clearList = () => {
    setList([]);
    setTotal(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem();
    
  };


  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              value={groceryName}
              onChange={(e) => setGroceryName(e.target.value)}
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              value={groceryCost}
              onChange={(e) => setGroceryCost(e.target.value)}
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
          </div>
          <div className="col-md-auto">
            <button type="submit"className="btn btn-success" 
            onClick={(e) => handleSubmit(e)}>
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
            {
              list.map((item) => (
                <tr key={item.groceryName}>
                  <td>{item.groceryName}</td>
                  <td>${item.cost}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      // set to remove item clicked from list
                      onClick={() => setList(list.filter((grocery) => grocery.groceryName !== item.groceryName))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${totalCost}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" onClick={clearList} className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
