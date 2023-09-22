import React, { useState } from "react";
import { Questions } from "./api";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(Questions);
  return (
    <>
      <section className="main-div">
        <h1> react interview questions</h1>
        {data.map((curr) => {
          const { id } = curr;
          return <MyAccordian key={id} {...curr} />;
          // {...curr} gives everything except id from data object
        })}
      </section>
    </>
  );
};

export default Accordian;

//before running this file add this tag in App.js
