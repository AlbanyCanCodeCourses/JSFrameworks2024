import { useState } from "react";

const LessText = (props) => {
  // props.text, props.maxLength
  const [text, setText] = useState(props.text);
  const [display, setDisplay] = useState('')

  const toggleDisplayProp = (e) => {
    if (props.text.length === props.maxLength) e.target.style
  }

  const handleTruncate = () => {
    setText(props.text.slice(0, props.maxLength).trim() + "...");
  }

  return (
    <div className="truncate-container">
      <p>{text}</p>
      <div className="btn-container">
        <button className="expand-btn" onClick={() => setText(text => props.text)}>
          Read More
        </button>
        <button className="collapse-btn" onClick={handleTruncate}>
          Read Less
        </button>
      </div>
    </div>
  )
}

export default LessText;