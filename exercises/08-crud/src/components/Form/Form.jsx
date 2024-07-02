import InputField from "../InputField/InputField";
import AddButton from "../Buttons/AddButton/AddButton";
import Warning from "../Warning/Warning";

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

export default Form;