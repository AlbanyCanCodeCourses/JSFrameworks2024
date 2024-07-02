// TABLE - TOTAL COMPONENT
const TableContext = ({ itemList }) => {
  return (
    <p className="lead">
      <strong>Total Cost: ${(Object.values(itemList).map((prop) => parseFloat(prop.price)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toFixed(2)}</strong>
    </p>
  )
}

export default TableContext;