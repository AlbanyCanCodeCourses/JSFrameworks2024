// Import something here
import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [itemList, setItemList] = useState([]);
  const [total, setTotal] = useState(0);
  const [validated, setValidated] = useState(false);

  // Event handlers
  const submitHandler = e => {
    e.preventDefault();
  }

  const controlsChangeHandler = e => {
    if (e.target.type === 'text') setItem(e.target.value);
    else if (e.target.type === 'number') setPrice(e.target.value);
    setValidated(false);
  }

  const clickHandler = e => {
    if (e.target.type === 'submit') addItem();
    else if (e.target.title.value === 'delete') removeItem(e);
    else if (e.target.type === 'button') clearItems();
  }

  // Helper functions

  const addItem = () => {
    setValidated(true);
    if (item !== '' && price !== '') {
      setItemList([...itemList, {
        name: item,
        cost: price
      }]);
      setTotal(o => o + Number(price));
      setValidated(false);
    }
  }

  const removeItem = e => {
    const itemIndex = Number(e.target.attributes.position.value);
    setItemList(itemList.filter((itemObj, index) => index !== itemIndex));
    if (itemList.length === 0) setTotal(0);
    else setTotal(o => o - itemList[itemIndex].cost)
  }

  const clearItems = () => {
    setItemList([]);
    setTotal(0);
  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className={`row g-3 ${validated ? 'was-validated' : ''}`} onSubmit={submitHandler} noValidate>
          <div className="col">
            <span
              className="prefix-symbol">
              &#9998;
            </span>
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={item}
              onChange={controlsChangeHandler}
              required
            />
            {validated &&
              <div className="invalid-feedback">Please enter the item name</div>
            }
          </div>
          <div className="col">
            <span
              className="prefix-symbol">
              $
            </span>
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={price}
              onChange={controlsChangeHandler}
              required
            />
            {validated &&
              <div className="invalid-feedback">Please enter the item cost</div>
            }
          </div>
          <div className="col-md-auto">
            <button
              type="submit"
              className="btn btn-success"
              onClick={clickHandler}>
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
             */
              itemList.map(itemObj => {
                const itemObjKey = itemList.indexOf(itemObj);
                return (
                  <tr key={itemObjKey}>
                    <td>{itemObj.name}</td>
                    <td>${itemObj.cost}</td>
                    <td>
                      <button
                        aria-label="Delete"
                        title="Delete"
                        position={itemObjKey}
                        onClick={removeItem}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: <span>${total.toFixed(2)}</span></strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={clearItems}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;