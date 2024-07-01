import "./App.css";
import { useState } from "react";

const GroceryList = () => {
  const [groceryList, setGroceryListItem] = useState([
    { groceryItem: 'Lettuce', price: '5.00' },
    { groceryItem: 'Milk', price: '25.00'},
    { groceryItem: 'Cheese', price: '3.99' }
  ]);

  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem && newPrice) {
      const formattedPrice = parseFloat(newPrice).toFixed(2);
      setGroceryListItem([...groceryList, { groceryItem: newItem, price: formattedPrice }]);
      setNewItem('');
      setNewPrice('');
    }
  };

  const handleDelete = (index) => {
    const updatedGroceryList = groceryList.filter((_, i) => i !== index);
    setGroceryListItem(updatedGroceryList);
  };

  const handleClear = () => {
    setGroceryListItem([]);
  };

  const totalCost = groceryList.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              value={newItem} 
              onChange={(e) => setNewItem(e.target.value)} 
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
              value={newPrice} 
              onChange={(e) => setNewPrice(e.target.value)} 
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
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
            {groceryList.map((item, index) => (
              <tr key={index}>
                <td>{item.groceryItem}</td>
                <td>{item.price}</td>
                <td>
                  <button aria-label="Delete" title="Delete" onClick={() => handleDelete(index)}>
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
          <button type="button" className="btn btn-outline-success" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
