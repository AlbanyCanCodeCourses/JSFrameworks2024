import { useState } from "react";

function Subscribe() {
    const [subscribed, setSubscribed] = useState(false);
    const subscribe = () => {
        setSubscribed(true);
    };
    return (
            <button onClick={subscribe}>{!subscribed ? "Please Subscribe" : "Subscribed!"}</button>
    );
};

export default Subscribe;