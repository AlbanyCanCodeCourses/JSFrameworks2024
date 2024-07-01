import { useState } from "react";

function Subscribe() {
  // Assignment: Toggle what the button says by using the `useState`
  const [subscribed, setSubscribed] = useState(false);

  // This button should say one of two things:
  // - Please subscribe
  // - Subscibed!
  return (
    <button onClick={() => setSubscribed(true)}>
      {subscribed ? "Subscribed!" : "Please subscribe"}
    </button>
  );
}

export default Subscribe;