// Import something here
import { useState } from "react";
import "./App.css";



const GroceryList = () => {
  // Local storage callbacks & helper functions
  const loadLocalStorageList = () => {
    const listInStorage = localStorage.list;
    if (typeof listInStorage === "undefined") return [];
    else return JSON.parse(localStorage.getItem('list'));
  }

  const loadLocalStorageTotal = () => {
    const totalInStorage = localStorage.total;
    if ((typeof totalInStorage === "undefined") || (+(totalInStorage) === 0)) return 0;
    else return parseFloat(JSON.parse(localStorage.getItem('total')));
  }

  const updateLocalStorage = (list, total) => {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("total", JSON.stringify(total));
  }

  // State variable declarations
  const [item, setItem] = useState(''); // Item name - str
  const [price, setPrice] = useState(''); // Item price - str
  const [itemList, setItemList] = useState(loadLocalStorageList); // Item list - obj array
  const [total, setTotal] = useState(loadLocalStorageTotal); // Item list total cost - number
  const [validated, setValidated] = useState(false); // Form status - bool
  // [true] - form status adding/attempting to add item --- [false] - default form status/form status after processing add item event

  // Event handlers
  const submitHandler = e => {
    e.preventDefault(); // Prevents page reload
  }

  const controlsChangeHandler = e => {
    if (e.target.type === 'text') setItem(e.target.value); // Targets grocery name input
    else if (e.target.type === 'number') setPrice(e.target.value); // Targets grocery price input
    setValidated(false);
  }

  const clickHandler = e => {
    if (e.target.type === 'submit') addItem(); // Targets 'Add' button
    else if (e.target.title.value === 'delete') removeItem(e); // Targets each list item's 'x' or delete button
    else if (e.target.type === 'button') clearItems(); // Targets 'Clear' button
  }



  // Helper functions
  const addItem = () => {
    console.log(price, typeof (+price));
    setValidated(true); // Update form submission status
    if (item !== '' && price !== '') { // If both grocery item input & grocery price input contain non-empty values..
      setItemList([...itemList, { // Update state to represent prior grocery list [array] in addition to the new item being added
        name: item,
        cost: price
      }]);
      setTotal(o => o + (+price)); // Pass an updater function to setTotal to update the total cost for the active render instead of the next render
      setValidated(false);

      updateLocalStorage([...itemList, {
        name: item,
        cost: price
      }], (total + (+price)).toFixed(2));
    }
  }

  const removeItem = e => {
    const itemIndex = Number(e.target.attributes.position.value); // Grabs value of 'position' attribute for delete button of grocery item targeted --- this represents the index of the targeted item in the grocery list array
    const newItemList = itemList.filter((itemObj, index) => index !== itemIndex); // Filter array to only contain elements which do not have the same index position as the grocery item targeted
    setItemList(newItemList);
    if (itemList.length === 1) { // If itemList of active render (the render as removeItem is being fired) only has 1 element, than itemList will be empty on next render (render following the removeItem being fired) so setTotal (reset 'total' state) to 0
      setTotal(0);
      updateLocalStorage([], 0);
    }
    else { // Otherwise, pass an updater function to update the total cost for active render
      setTotal(o => o - itemList[itemIndex].cost);
      updateLocalStorage(newItemList, (total - parseFloat(itemList[itemIndex].cost)).toFixed(2));
    }
  }

  const clearItems = () => {
    setItemList([]); // Reset grocery list array to 
    setTotal(0);
    updateLocalStorage([], 0);
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
              itemList.map(itemObj => { // Iterate through obj array to render grocery items to screen
                const itemObjKey = itemList.indexOf(itemObj); // Grab each itemObj index within array...
                return (
                  <tr key={itemObjKey /* ...and set both the containing table row's "key" attribute... */}>
                    <td>{itemObj.name}</td>
                    <td>${parseFloat(itemObj.cost).toFixed(2)}</td>
                    <td>
                      <button
                        aria-label="Delete"
                        title="Delete"
                        position={itemObjKey /* ...as well as the child button's "position" attribute to this value */}
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
          <strong>Total Cost: ${total.toFixed(2)}</strong>
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