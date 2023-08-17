import React from "react";
import ReactDOM from "react-dom";

const fname = "samiksha";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = ["https://www.google.com/", "https://www.youtube.com/"];
//we can use render() to return array of elements

const heading = {
  color: "#ee4848",
  textTransform: "capitalize",
  textShadow: "0 2px 4px #777674",
  textAlign: "center",
  fontFamily: "'Josefin Sans', sans-serif",
};

ReactDOM.render(
  <>
    <h1 contentEditable="true" style={heading}>
      hey! My name is {fname}
    </h1>
    <div className="img_div">
      <a href={links[0]} target="_youcanwriteanythinghere">
        <img src={img1} alt="random" />
      </a>
      <a href={links[1]} target="_youcanwriteanythinghere">
        <img src={img2} alt="random" />
      </a>
      <img src={img3} alt="random" />
    </div>
    <p1>{`current date is ${currdate}`} </p1>
    <p1>{`current time is ${currtime}`} </p1>
  </>,

  document.getElementById("root")
);
