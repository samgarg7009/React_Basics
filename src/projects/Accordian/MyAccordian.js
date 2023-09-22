import React, { useState } from "react";
 
//instead of using props we can use destructuring due to ES6 { question, answer }
const MyAccordian = ({ question, answer, link }) => {
  const [show, setshow] = useState(false);
  // const SetButton = () => {
  //   setshow(!show);
  // };

  return (
    <>
      <div className="main-heading">
        <h3>{question}</h3>
        <div>
          <p onClick={() => setshow(!show)}> {show ? "➖" : "➕"}</p>
        </div>
        {/* in onClick fat arrow function is used because without this, it will go in infinte loop 
        OR we can also use the method of calling SetButton fat arrow funtion*/}
      </div>
      {show && <p className="answers">{answer} <a href="{link}"> For more info</a></p> }
      {/* if show is true only then show answers */}
    </>
  );
};

export default MyAccordian;
