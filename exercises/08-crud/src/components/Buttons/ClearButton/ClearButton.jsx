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

export default ClearButton;