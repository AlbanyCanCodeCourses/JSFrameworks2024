// import React from 'react';
// import { useState } from 'react';


// const LessText = (props) => {
//     // const [ReadMore, setReadMore] = useState(false);
//     // const Toggle = () => { setReadMore(true) };  
//     const [ReadMore, setReadMore] = useState(false);
//     const Toggle = () =>setReadMore(true);
//     console.log(Toggle);

//   return (
//       <div>
          
//           <div>
// {ReadMore?props.text:props.text.substring(0, props.maxLength)}
              
//               <button className="btn btn-secondary" onClick={Toggle}>
//           Read More
//         </button>
//         <button
//           className="btn btn-secondary"
//           onClick={() => setReadMore(false)}
//         >
//           Read Less
//         </button>
//           </div>
         
        
                  
      
          
//     </div>
//   );
// }

// export default LessText;
import { useState } from "react";
 
function LessText(props) {
  const [readMore, setReadMore] = useState(false);
  const showMoreText = () => setReadMore(true);
  return (
    <div>
      {readMore ?  props.text.substring(0, props.maxLength): props.text }
      
      <div>
        <button className="btn btn-secondary" onClick={showMoreText}>
          Read More
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setReadMore(false)}
        >
          Read Less
        </button>
      </div>
    </div>
  );
}
 
export default LessText;
 