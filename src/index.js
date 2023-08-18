import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import Card from "./Cards";
//import Sdata from "./Sdata";
import Netflix from "./challenge5(listOf5Series)/withIfElseCondition/netfxFav";
import Amazon from "./challenge5(listOf5Series)/withIfElseCondition/amznFav";

const favseries = "netflix";

const FavS = () => {
  if (favseries === "netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
  }
};

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 5 netflix seires</h1>
    <FavS />;
  </>,
  document.getElementById("root")
);
