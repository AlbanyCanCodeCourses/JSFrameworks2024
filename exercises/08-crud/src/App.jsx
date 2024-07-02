// Import something here
import { useState } from "react";
import "./App.css";

// Symbol component -- context symbols positioned inline to user input fields
const PrefixSymbol = ({ symbolCode }) => {
  return (
    <span
      className="prefix-symbol"
    >
      {symbolCode}
    </span>
  )
}

// Row component -- rows representing individual items in grocery list
const TableRow = ({ name, cost, id, onDelete }) => {
  return (
    <tr position={id}>
      <td>
        <span>{`${id + 1}) `}</span>{name}
      </td>
      <td>${cost}</td>
      <td>
        <button
          aria-label="Delete"
          title="Delete"
          onClick={onDelete}
        >
          &times;
        </button>
      </td>
    </tr>
  )
}


// List component -- App parent component
const GroceryList = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemList, setItemList] = useState([]);
  const [hasError, setHasError] = useState(false);

  const addItem = () => {
    setItemList([...itemList, {
      name: itemName,
      price: itemPrice
    }]);
    setHasError(false);
  }

  const removeItem = e => {
    const removeIndex = e.target.parentNode.parentNode.attributes.position.value;
    const removedItem = itemList[removeIndex];
    const filteredList = itemList.filter((item) => item !== removedItem);
    setItemList(filteredList);
    setHasError(false);
  }

  const resetHandler = () => {
    setItemName('');
    setItemPrice('');
    setItemList([]);
    setHasError(false);
  };

  const submitHandler = e => {
    e.preventDefault();
    setHasError(false);
    if (itemName && itemPrice && !hasError) addItem();
    else setHasError(true);
  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST"
          className="row g-3"
          noValidate
          onSubmit={submitHandler}
        >
          <div className="col">
            <PrefixSymbol symbolCode="&#9998;" />
            <input
              className={(hasError && !itemName) ? "form-control is-invalid" : "form-control"}
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              required
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />
            {(hasError && !itemName) &&
              <div className="invalid-feedback">
                Please enter a grocery item
              </div>
            }
          </div>
          <div className="col">
            <PrefixSymbol symbolCode="$" />
            <input
              className={(hasError && !itemPrice) ? "form-control is-invalid" : "form-control"}
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              required
              value={itemPrice}
              onChange={e => setItemPrice(e.target.value)}
            />
            {(hasError && !itemPrice) &&
              <div className="invalid-feedback">
                Please enter an item price
              </div>
            }
          </div>
          <div className="col-md-auto">
            <button
              type="submit"
              className="btn btn-success"
              onClick={submitHandler}
            >
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
            {itemList.map((listItem, index) => {
              return (
                <TableRow
                  key={index}
                  name={listItem.name}
                  cost={listItem.price}
                  id={index}
                  onDelete={removeItem}
                />
              )
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${(Object.values(itemList).reduce((total, itemObj) => (total + (+itemObj.price)), 0)).toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={resetHandler}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;