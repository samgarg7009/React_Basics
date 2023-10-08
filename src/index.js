import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import { createRoot } from "react-dom/client";
//import Card from "./Cards";
//import Sdata from "./Sdata";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App/>);