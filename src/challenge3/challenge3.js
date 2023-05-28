import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let currTime = new Date().getHours();
let greeting = "";
const cssStyle = {};
if (currTime >= 1 && currTime < 12) {
  greeting = "good morning";
  cssStyle.color = "Blue";
} else if (currTime >= 12 && currTime < 19) {
  greeting = "good afternoon";
  cssStyle.color = "yellow";
} else if (currTime >= 20 && currTime < 24) {
  greeting = "good night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
