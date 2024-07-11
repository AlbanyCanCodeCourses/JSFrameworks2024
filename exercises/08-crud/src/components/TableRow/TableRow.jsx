// TABLE - ROW COMPONENT
const TableRow = ({ name, price, position, onDelete }) => {
  return (
    <tr>
      <td>{`${position + 1}) ${name}`}</td>
      <td>{`$${parseFloat(price).toFixed(2)}`}</td>
      <td>
        <button
          className="close btn btn-sm"
          aria-label="Delete"
          title="Delete"
          index={position}
          onClick={onDelete}
        >
          <span
            aria-hidden="true"
            index={position}>
            &times;
          </span>
        </button>
      </td>
    </tr>
  )
}

export default TableRow;