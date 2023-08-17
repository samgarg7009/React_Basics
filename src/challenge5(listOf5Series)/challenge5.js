import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Card from "./Cards";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 5 netflix seires</h1>
    {/* {Sdata.map(function ncard(val) {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })} */}
    {Sdata.map((val, index) => {
      return (
        //here card is a component which is used as a tag
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    ;
  </>,
  document.getElementById("root")
);
