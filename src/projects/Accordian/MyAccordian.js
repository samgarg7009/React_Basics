import React, { useState } from "react";


//instead of using props we can use destructuring dua to ES6
const MyAccordian =({question,answer}) =>{
    const [show,setshow] = useState(false);
    return (
      <>
        <div className="main-heading">
          <h1>{question}</h1>
          <p onClick={() => setshow(!show)}> {show? "➖" :"➕" }</p>
          {/* in onClicj fat arrow function is used because without this, it will go in infinte loop */}
        </div>
        {show && <p>{answer}</p>}
        {/* if show is true only then show answers */}
      </>
    );
}

export default MyAccordian;