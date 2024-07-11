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

export default Warning;