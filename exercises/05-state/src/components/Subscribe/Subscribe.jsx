import { useState } from "react";

function Subscribe() {
  // Assignment: Toggle what the button says by using the `useState`

  // This button should say one of two things:
  // - Please subscribe
  // - Subscibed!
  const [status, setStatus] = useState(false);

  const statusHandler = () => {
    setStatus(!status);
  }

  return <button onClick={statusHandler}>{status ? 'Please Subscribe' : 'Subscribed!'}</button>;
}

export default Subscribe;