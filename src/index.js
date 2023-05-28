import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Card from './Cards';


ReactDOM.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="Dark"
      link="https://www.netflix.com/in/title/80990668?sourse=35"
    />
    <Card
      imgsrc="https://wallpapercave.com/uwp/uwp3621169.png"
      title="A Netflix Orignal Series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80990668?sourse=35"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp7418473.jpg"
      title="A Netflix Orignal Series"
      sname="Extra Cirricular"
      link="https://www.netflix.com/in/title/80990668?sourse=35"
    />
  </>,
  document.getElementById("root")
);
