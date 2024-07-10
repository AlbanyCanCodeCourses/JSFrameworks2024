import React, { useState } from 'react';
import "./App.css";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [error, setError] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (!itemName || !itemCost) {
      setError("Both name and cost are required.");
      return;
    }

    const newItem = {
      name: itemName,
      cost: parseFloat(itemCost),
    };

    setGroceryItems([...groceryItems, newItem]);
    setItemName("");
    setItemCost("");
    setError("");
  };

  const deleteItem = (index) => {
    const updatedItems = groceryItems.filter((_, i) => i !== index);
    setGroceryItems(updatedItems);
  };

  const clearList = () => {
    setGroceryItems([]);
  };

  const totalCost = groceryItems.reduce((total, item) => total + item.cost, 0).toFixed(2);

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={addItem}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
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
              value={itemCost}
              onChange={(e) => setItemCost(e.target.value)}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
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
            {groceryItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.cost.toFixed(2)}</td>
                <td>
                  <button
                    aria-label="Delete"
                    title="Delete"
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItem(index)}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${totalCost}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={clearList}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;