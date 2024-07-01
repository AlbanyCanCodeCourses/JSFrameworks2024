import { useState } from "react";

const LessText = ({ text="", maxLength }) => {
    const [hide, setHide] = useState(false);
    return (
        <div>
            <p>{!hide ? text.substring(0, maxLength).trim() : text}</p>
            <div>
                <button type="button" className="btn btn-light" onClick={() => setHide(true)} >Read More</button>
                <button type="button" className="btn btn-light" onClick={() => setHide(false)}>Read Less</button>
            </div>
        </div>
    );
};

export default LessText;