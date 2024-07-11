import { useState } from "react";
import Form from "./components/Form/Form";
import ListTable from "./components/ListTable/ListTable";
import TableContext from "./components/TableContext/TableContext";
import ClearButton from "./components/Buttons/ClearButton/ClearButton";
import "./App.css";

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