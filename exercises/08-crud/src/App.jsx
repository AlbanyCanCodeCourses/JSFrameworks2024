import React, { useState } from `react`;
import "./App.css";

const GroceryList = () => {
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className={
                hasError && !name ? "is-invalid form control" : "form-control"
              }
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {hasError && !name && (
              <div className="invalidfeedback">
                Please enter a grocery item
              </div>
            )}
          </div>
          <div className="col">
            <input
              className={
                hasError && !cost ? "is-invalid form control" : "form-control"
              }
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              onChange={(e) => SetCost(parseFloat(e.target.value))}
            />
            {hasError && !cost && (
              <div className="invalid-feedback">Please enter the cost</div>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            /**
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
            {GroceryList.map((item,index) => {
              return(
              <tr key={`item-${index}`}>
                <td>
                  <button
                   aria-label="Delete"
                   title="Delete"
                   className="btn"
                   onClick={() => deleteFromList(index)}
                  >
                    &times;
                   </button>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {calcTotal().toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success"
          onClick={clearList}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default GroceryList;


