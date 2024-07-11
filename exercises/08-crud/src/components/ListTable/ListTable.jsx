import TableRow from "../TableRow/TableRow";

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

export default ListTable;