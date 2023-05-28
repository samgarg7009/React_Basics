import React from "react";
import ReactDom from "react-dom";
//import App from "../App";
import text, { myname, item,myintro } from "./PractiseApp";
//import * as info from './App';
import "./index.css";

//const fname = "samiksha";
//const lname = "garg";

//we can use render() to return array of elements

ReactDom.render(
  // <div>
  //   <h1> Hello World!</h1>
  //   <p> how are you</p>
  // </div>,

  // [
  //  <h1> Hello World!</h1>,
  //  <p> how are you</p>
  // ],

  //instesd of writing React.Fragment, can also use this
  // <React.Fragment>
  //   <h1> Hello World!</h1>
  //   <p> how are you</p>
  // </React.Fragment>,

  //React.Fragment reduces one extra node created in div,consumes less memory and works faster

  // <>
  //   <h1> Hello World!</h1>
  //   <p> how are you</p>
  //   <h2>my name is {fname} {lname}</h2>
  //   <h2>my name is {fname + lname}</h2>
  //   <h2>my name is {fname + " " + lname}</h2>

  //   <h2>my name is {`${fname} ${lname}`}</h2>

  //   <h2>{`my first name is ${fname} and my last name is ${lname}`}</h2>

  //   <p>my age is {10 + 11}</p>
  //   <p>my lucky no. is {Math.random()}</p>

  //   {/* <h1 contentEditable="true" className="heading">
  // </>,
  <>
    {/* {info.myname()}
    <ol>
      <li>{info.item}</li>
    </ol> */}
    {myname()}
    <ol>
      <li>{item}</li>
      <li>{myintro()}</li>
    </ol>
  </>,
  //inside {} we can only use expressions not statements like  if-else
  document.getElementById("root")
);
