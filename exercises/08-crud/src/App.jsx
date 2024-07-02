import { useState } from "react";
import "./App.css";

/*
Add Button
Clear Button
Input Fields
Form
List Table
List Row
*/

// BUTTON (ADD)
const AddButton = () => {
  return (
    <button
      type="submit"
      className="btn btn-success">
      Add
    </button>
  )
}

// BUTTON (RESET) COMPONENT
const ClearButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={onClick}
    >
      Clear
    </button>
  )
}

// INPUT COMPONENT
const InputField = ({ type, placeholder, min, step, value, onChange, hasError }) => {
  return (
    <input
      className={hasError && !value ? 'form-control is-invalid' : 'form-control'}
      type={type}
      min={min ? min : ''}
      step={step ? step : ''}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

// WARNING MESSAGE COMPONENT
const Warning = ({ type }) => {
  return (
    <div
      className="invalid-feedback"
    >
      {type === 'name' ? 'Please enter grocery item' : 'Please enter an item price'}
    </div>
  )
}

// FORM COMPONENT
const Form = ({ itemName, setItemName, itemPrice, setItemPrice, itemList, setItemList, addItem, hasError, setHasError }) => {

  const submitHandler = e => {
    e.preventDefault();

    if (itemName && itemPrice) addItem();
    else setHasError(true);
  }

  const changeHandler = e => {
    if (e.target.type === 'text') setItemName(e.target.value);
    else if (e.target.type === 'number') setItemPrice(e.target.value);

    if (itemName && itemPrice) setHasError(false);
  }

  return (
    <form method="POST" className="row g-3" onSubmit={submitHandler}>
      <div className="col">
        <InputField
          type="text"
          placeholder="Name of grocery item..."
          value={itemName}
          onChange={changeHandler}
          hasError={hasError}
        />
        {hasError && !itemName &&
          <Warning type="name" />
        }
      </div>
      <div className="col">
        <InputField
          type="number"
          min={0}
          step={.01}
          placeholder="Price of grocery item..."
          value={itemPrice}
          onChange={changeHandler}
          hasError={hasError}
        />
        {hasError && !itemPrice &&
          <Warning type="price" />
        }
      </div>
      <div className="col-md-auto">
        <AddButton
          onClick={submitHandler}
        />
      </div>
    </form>
  )
}

// TABLE - TOTAL COMPONENT
const TableContext = ({ itemList }) => {
  return (
    <p className="lead">
      <strong>Total Cost: ${(Object.values(itemList).map((prop) => parseFloat(prop.price)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toFixed(2)}</strong>
    </p>
  )
}

// TABLE - ROW COMPONENT
const TableRow = ({ name, price, position, onDelete }) => {
  return (
    <tr>
      <td>{`${position + 1}) ${name}`}</td>
      <td>{`$${parseFloat(price).toFixed(2)}`}</td>
      <td>
        <button
          className="btn btn-outline-secondary btn-sm"
          aria-label="Delete"
          title="Delete"
          index={position}
          onClick={onDelete}
        >
          &times;
        </button>
      </td>
    </tr>
  )
}

// TABLE COMPONENT
const ListTable = ({ itemList, setItemList, onDelete }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {itemList.map((item) => {
          const id = itemList.indexOf(item);
          return (
            <TableRow
              key={id}
              name={item.name}
              price={item.price}
              position={id}
              onDelete={onDelete}
            />
          )
        })}
      </tbody>
    </table>
  )
}


// MAIN RENDER COMPONENT
const GroceryList = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemList, setItemList] = useState([]);
  const [hasError, setHasError] = useState(false);

  const addItem = () => {
    const newItem = {
      name: itemName,
      price: itemPrice
    }
    setItemList([...itemList, newItem]);
    setHasError(false);
  }

  const removeItem = e => {
    const indexInList = +e.target.attributes.index.value;
    setItemList(
      itemList.filter((i, index) =>
        index !== indexInList
      )
    );

    const areItemsRemaining = itemList.length > 1;
    if (!areItemsRemaining) {
      setItemName('');
      setItemPrice('');
    }
  }

  const clearItems = () => {
    setItemName('');
    setItemPrice('');
    setItemList([]);
    setHasError(false);
  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <Form
          itemName={itemName}
          setItemName={setItemName}
          itemPrice={itemPrice}
          setItemPrice={setItemPrice}
          itemList={itemList}
          setItemList={setItemList}
          addItem={addItem}
          hasError={hasError}
          setHasError={setHasError}
        />
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <ListTable
          itemList={itemList}
          setItemList={setItemList}
          onDelete={removeItem}
        />
        <TableContext
          itemList={itemList}
        />
        <div className="d-flex justify-content-end">
          <ClearButton
            onClick={clearItems}
          />
        </div>
      </div>
    </div>
  );
};

export default GroceryList;